// main.js

// ===== Assumed Global Configurations =====
// Loaded in index.html before main.js via:
//   <script src="config/equipment.js"></script>
//   <script src="config/items.js"></script>
//   <script src="config/enemies.js"></script>
//   <script src="config/spells.js"></script>
//   <script src="config/events.js"></script>

// ===== Difficulty Multipliers =====
const difficultyMultiplier = {
  easy:   { enemy: 0.8, exp: 0.8, gold: 0.8 },
  medium: { enemy: 1.0, exp: 1.0, gold: 1.0 },
  hard:   { enemy: 1.2, exp: 1.2, gold: 1.2 }
};

// ===== Game State & Defaults =====
let gameState = null;
let lastPlayerAction = '';
let lastEnemyAction  = '';

const defaultState = {
  difficulty: 'medium',
  level: 1,
  roomIndex: 0,
  map: [],
  player: {
    // Equipment
    weapon:      { ...equipmentConfig.starting.weapon },
    armor:       { ...equipmentConfig.starting.armor },
    accessories: [ ...equipmentConfig.starting.accessories ],
    // Stats
    HP: 100,
    MP: 30,
    ATK: 10,
    DEF: 5,
    MAG_ATK: 8,
    MAG_DEF: 4,
    // Progression
    EXP: 0,
    level: 1,
    points: 0,
    gold: 50,
    inventory: [],
    spells: [ ...spellsConfig.filter(s => s.levelReq <= 1) ]
  }
};

// ===== Persistence =====
function saveGame() {
  localStorage.setItem('textRPG_save', JSON.stringify(gameState));
}

function loadGame() {
  const s = localStorage.getItem('textRPG_save');
  if (!s) {
    alert('No save found.');
    return;
  }
  gameState = JSON.parse(s);
  renderMenu();
}

// ===== Initialization =====
function initNewGame() {
  gameState = JSON.parse(JSON.stringify(defaultState));
  gameState.difficulty = document.getElementById('difficulty').value;
  generateMap();
  saveGame();
}

// ===== Map Generation =====
function generateMap() {
  const count = 5 + gameState.level * 2;
  gameState.map = [];
  for (let i = 0; i < count; i++) {
    if (i === count - 1)      gameState.map.push('boss');
    else if (i === count - 2) gameState.map.push('shop');
    else                      gameState.map.push(Math.random() < 0.6 ? 'battle' : 'event');
  }
  gameState.roomIndex = 0;
}

// ===== Screen Management =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.hidden = true);
  document.getElementById(id).hidden = false;
}

// ===== Screen 1: Main Menu =====
function renderMenu() {
  showScreen('screen1');
  const p = gameState.player;
  const maxHP = 100 + (p.level - 1) * 10;
  const maxMP = 30  + (p.level - 1) * 5;
  document.getElementById('mainStats').innerHTML = `
    <p>Level ${p.level} | HP ${p.HP}/${maxHP} | MP ${p.MP}/${maxMP}</p>
    <p>ATK ${p.ATK}+${p.weapon.ATK} DEF ${p.DEF}+${p.armor.DEF} | M.ATK ${p.MAG_ATK} M.DEF ${p.MAG_DEF}</p>
  `;
}

document.getElementById('startBtn').onclick = () => {
  initNewGame();
  renderMap();
};

document.getElementById('continueBtn').onclick = () => {
  loadGame();
  if (gameState) renderMap();
};

// ===== Screen 2: Dungeon Navigation =====
function renderMap() {
  showScreen('screen2');
  document.getElementById('levelNum').textContent = gameState.level;
  document.getElementById('navStats').innerHTML = document.getElementById('mainStats').innerHTML;
  const mapStr = gameState.map
    .map((r, i) => i < gameState.roomIndex ? '·' : i === gameState.roomIndex ? 'X' : '.')
    .join(' ');
  document.getElementById('minimap').textContent = mapStr;
}

document.getElementById('moveBtn').onclick = () => {
  const room = gameState.map[gameState.roomIndex];
  if (room === 'battle' || room === 'boss') startBattle();
  else if (room === 'event')               startEvent();
  else if (room === 'shop')                enterShop();
};

document.getElementById('toEquipmentBtn').onclick = renderEquipment;

// ===== Screen 3: Battle =====
let currentEnemy = null;

function startBattle() {
  // Choose enemy up to player level+1
  const pool = enemiesConfig.filter(e => e.level <= gameState.player.level + 1);
  currentEnemy = JSON.parse(JSON.stringify(pool[Math.floor(Math.random() * pool.length)]));

  // Scale stats by difficulty
  const m = difficultyMultiplier[gameState.difficulty].enemy;
  ['HP','MP','ATK','DEF','MAG_DEF'].forEach(stat => {
    currentEnemy[stat] = Math.floor(currentEnemy[stat] * m);
  });

  // Reset last actions
  lastPlayerAction = '';
  lastEnemyAction = '';

  showScreen('screen3');
  document.getElementById('enemyName').textContent = `${currentEnemy.name} (Lvl ${currentEnemy.level})`;
  updateBars();
  updateBattleLog(`<p>A ${currentEnemy.name} appears!</p>`);
  renderBattleOptions();
  updateStatus();
}

function updateBars() {
  // Enemy bars
  const eMaxHP = 20 + currentEnemy.level * 10;
  const eMaxMP = 5  + currentEnemy.level * 2;
  document.getElementById('enemyHpBar').style.width = `${Math.max(0, currentEnemy.HP) / eMaxHP * 100}%`;
  document.getElementById('enemyMpBar').style.width = `${Math.max(0, currentEnemy.MP) / eMaxMP * 100}%`;

  // Player bars
  const p = gameState.player;
  const pMaxHP = 100 + (p.level - 1) * 10;
  const pMaxMP = 30  + (p.level - 1) * 5;
  document.getElementById('playerHpBar').style.width = `${Math.max(0, p.HP) / pMaxHP * 100}%`;
  document.getElementById('playerMpBar').style.width = `${Math.max(0, p.MP) / pMaxMP * 100}%`;
}

function updateBattleLog(html) {
  document.getElementById('battleLog').innerHTML = html;
}

function updateStatus() {
  document.getElementById('statusUpdate').innerHTML = `
    <p>You: ${lastPlayerAction || '—'}</p>
    <p>Enemy: ${lastEnemyAction  || '—'}</p>
  `;
}

function renderBattleOptions() {
  const opts = document.getElementById('battleOptions');
  opts.innerHTML = '';

  // Attack button
  const atkBtn = document.createElement('button');
  atkBtn.textContent = 'Attack';
  atkBtn.onclick = () => doPlayerAction('attack');
  opts.appendChild(atkBtn);

  // Spell buttons
  spellsConfig
    .filter(s => s.levelReq <= gameState.player.level && s.cost <= gameState.player.MP)
    .forEach(sp => {
      const btn = document.createElement('button');
      btn.textContent = `${sp.name} (MP ${sp.cost})`;
      btn.onclick = () => castSpell(sp);
      opts.appendChild(btn);
    });

  // Item button (inventory use)
  const itBtn = document.createElement('button');
  itBtn.textContent = 'Item';
  itBtn.onclick = () => {/* Optionally implement in-battle item use */};
  opts.appendChild(itBtn);
}

function doPlayerAction(type) {
  let text = '';
  if (type === 'attack') {
    const dmg = Math.max(
      (gameState.player.ATK + gameState.player.weapon.ATK) - currentEnemy.DEF,
      0
    );
    currentEnemy.HP -= dmg;
    text = `You strike for ${dmg} damage.`;
  }
  lastPlayerAction = text;
  updateBars();
  updateBattleLog(`<p>${text}</p>`);
  updateStatus();
  setTimeout(enemyTurn, 300);
}

function castSpell(sp) {
  const dmg = Math.max(sp.dmg + gameState.player.MAG_ATK - currentEnemy.MAG_DEF, 0);
  gameState.player.MP -= sp.cost;
  currentEnemy.HP -= dmg;
  lastPlayerAction = `Cast ${sp.name} for ${dmg} damage.`;
  updateBars();
  updateBattleLog(`<p>${lastPlayerAction}</p>`);
  updateStatus();
  setTimeout(enemyTurn, 300);
}

function enemyTurn() {
  if (currentEnemy.HP <= 0) return battleVictory();
  const dmg = Math.max(currentEnemy.ATK - gameState.player.DEF, 0);
  gameState.player.HP -= dmg;
  lastEnemyAction = `${currentEnemy.name} hits you for ${dmg} damage.`;
  updateBars();
  updateBattleLog(`<p>${lastEnemyAction}</p>`);
  updateStatus();
  if (gameState.player.HP <= 0) return gameOver();
  renderBattleOptions();
}

function battleVictory() {
  const diff = difficultyMultiplier[gameState.difficulty];
  updateBattleLog('<p>You are victorious!</p>');
  lastPlayerAction = lastEnemyAction = '';
  updateStatus();
  // Reward EXP & gold
  gameState.player.EXP  += Math.floor(currentEnemy.exp  * diff.exp);
  gameState.player.gold += Math.floor(currentEnemy.gold * diff.gold);
  // Loot drops
  const drops = [];
  if (Math.random() < 0.2) {
    const w = equipmentConfig.weapons.filter(wp => wp.levelReq <= gameState.player.level);
    drops.push(w[Math.floor(Math.random() * w.length)]);
  }
  if (Math.random() < 0.2) {
    const a = equipmentConfig.armors.filter(ar => ar.levelReq <= gameState.player.level);
    drops.push(a[Math.floor(Math.random() * a.length)]);
  }
  if (Math.random() < 0.3) {
    const ac = equipmentConfig.accessories.filter(ac => ac && ac.levelReq <= gameState.player.level);
    drops.push(ac[Math.floor(Math.random() * ac.length)]);
  }
  if (Math.random() < 0.5) {
    drops.push(itemsConfig[Math.floor(Math.random() * itemsConfig.length)]);
  }
  gameState.player.inventory.push(...drops);

  advanceRoom();
}

function gameOver() {
  alert('You have fallen in battle… Starting a new game.');
  initNewGame();
  renderMap();
}

// ===== Screen 4: Random Events =====
function startEvent() {
  showScreen('screen4');
  const e = eventsConfig[Math.floor(Math.random() * eventsConfig.length)];
  document.getElementById('eventText').textContent = e.text;
  const choicesDiv = document.getElementById('eventChoices');
  choicesDiv.innerHTML = '';

  e.choices.forEach(opt => {
    // Check availability
    let available = true;
    for (const [stat, val] of Object.entries(opt.effect)) {
      if (val < 0) {
        if (stat === 'gold' && gameState.player.gold < -val) available = false;
        if (stat === 'MP'   && gameState.player.MP   < -val) available = false;
        if (stat === 'HP'   && gameState.player.HP   < -val) available = false;
      }
    }
    if (!available) return;

    const btn = document.createElement('button');
    btn.textContent = opt.label;
    btn.onclick = () => {
      // Apply effects
      for (const [stat, val] of Object.entries(opt.effect)) {
        if (stat === 'gold') gameState.player.gold += val;
        else                 gameState.player[stat] += val;
      }
      saveGame();

      // Show outcome
      let outcome = '';
      for (const [stat, val] of Object.entries(opt.effect)) {
        if (val > 0)     outcome += `You gained ${val} ${stat}. `;
        else if (val < 0) outcome += `You lost ${-val} ${stat}. `;
      }
      if (!outcome) outcome = 'Nothing happens.';
      document.getElementById('eventText').textContent = outcome;

      // Continue button
      choicesDiv.innerHTML = '';
      const cont = document.createElement('button');
      cont.textContent = 'Continue';
      cont.onclick = () => advanceRoom();
      choicesDiv.appendChild(cont);
    };

    choicesDiv.appendChild(btn);
  });
}

// ===== Screen 5: Shop & Save =====
function enterShop() {
  showScreen('screen5');
  document.getElementById('shopStats').innerHTML = document.getElementById('mainStats').innerHTML;
  const list = document.getElementById('shopList');
  list.innerHTML = '';

  itemsConfig.forEach(it => {
    const wrapper = document.createElement('div');
    wrapper.className = 'tooltip';
    wrapper.innerHTML = `${it.name} - ${it.cost}g
      <span class="tooltiptext">${it.desc}</span>`;
    const buy = document.createElement('button');
    buy.textContent = 'Buy';
    buy.onclick = () => {
      if (gameState.player.gold >= it.cost) {
        gameState.player.gold -= it.cost;
        gameState.player.inventory.push(it);
        saveGame();
        alert('Purchased!');
      } else {
        alert('Not enough gold.');
      }
    };
    wrapper.appendChild(buy);
    list.appendChild(wrapper);
  });
}
document.getElementById('saveBtn').onclick      = () => { saveGame(); alert('Game saved.'); };
document.getElementById('exitShopBtn').onclick = advanceRoom;

// ===== Screen 6: Equipment & Spells =====
function renderEquipment() {
  showScreen('screen6');
  const eq = document.getElementById('equipList');
  eq.innerHTML = `
    <p><strong>Weapon:</strong> ${gameState.player.weapon.name}</p>
    <p><strong>Armor:</strong>  ${gameState.player.armor.name}</p>
    <p><strong>Accessories:</strong> ${gameState.player.accessories.map(a => a ? a.name : '[Empty]').join(', ')}</p>
    <p><strong>Gold:</strong> ${gameState.player.gold}</p>
  `;

  // Inventory
  const inv = document.createElement('div');
  inv.innerHTML = '<h3>Inventory</h3>';
  gameState.player.inventory.forEach((it, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'tooltip';
    wrapper.innerHTML = `${it.name || it.id}
      <span class="tooltiptext">${it.desc || ''}</span>`;
    const use = document.createElement('button');
    use.textContent = 'Use';
    use.onclick = () => {
      if (it.effect?.HP) gameState.player.HP += it.effect.HP;
      if (it.effect?.MP) gameState.player.MP += it.effect.MP;
      gameState.player.inventory.splice(i, 1);
      saveGame();
      renderEquipment();
    };
    wrapper.appendChild(use);
    inv.appendChild(wrapper);
  });
  eq.appendChild(inv);

  // Spells list
  const sp = document.getElementById('spellList');
  sp.innerHTML = '<h3>Spells</h3>' +
    gameState.player.spells
      .filter(s => s.levelReq <= gameState.player.level)
      .map(s => `<p>${s.name} (MP ${s.cost}) – ${s.desc}</p>`)
      .join('');
}

document.getElementById('backToMapBtn').onclick = renderMap;

// ===== Advance Room Helper =====
function advanceRoom() {
  gameState.roomIndex++;
  if (gameState.roomIndex >= gameState.map.length) {
    gameState.level++;
    generateMap();
  }
  saveGame();
  renderMap();
}
