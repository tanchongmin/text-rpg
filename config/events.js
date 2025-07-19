// config/events.js

const eventsConfig = [
    {
      text: 'You discover a hidden healing spring.',
      choices: [
        { label: 'Drink deeply to heal',             effect: { HP: +30 },    type: 'buff',    desc: 'Restore 30 HP.' },
        { label: 'Collect water to sell',             effect: { gold: +40 },  type: 'buff',    desc: 'Gain 40 gold.' },
        { label: 'Ignore and move on',                effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A poisonous gas trap erupts in your path.',
      choices: [
        { label: 'Hold your breath and rush through', effect: { HP: -10 },    type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Use cloth to filter the gas',       effect: { HP: -5, MP: -5 }, type: 'harm', desc: 'Lose 5 HP & 5 MP.' },
        { label: 'Retreat and find another way',      effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'You find a trove of ancient coins gleaming in the dirt.',
      choices: [
        { label: 'Take all the coins',                effect: { gold: +100, HP: -10 }, type: 'buff', desc: 'Gain 100 gold but lose 10 HP.' },
        { label: 'Take half and leave some',          effect: { gold: +50 },  type: 'buff',    desc: 'Gain 50 gold.' },
        { label: 'Leave them untouched',              effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A goblin thief attempts to pick your pocket.',
      choices: [
        { label: 'Chase and subdue the goblin',       effect: { gold: +20, HP: -10 }, type: 'buff', desc: 'Gain 20 gold but lose 10 HP.' },
        { label: 'Let him go unchallenged',           effect: { },            type: 'neutral', desc: 'No effect.' },
        { label: 'Give him some gold to appease him', effect: { gold: -20 },   type: 'harm',    desc: 'Lose 20 gold.' }
      ]
    },
    {
      text: 'A mysterious scroll glows with arcane power.',
      choices: [
        { label: 'Read it for knowledge',             effect: { MAG_ATK: +2, HP: -10 }, type: 'buff', desc: 'Gain +2 Mag Atk but lose 10 HP.' },
        { label: 'Sell it to a scholar',              effect: { gold: +60 },  type: 'buff',    desc: 'Gain 60 gold.' },
        { label: 'Discard it to avoid danger',        effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A beggar pleads for a coin.',
      choices: [
        { label: 'Give 10 gold',                      effect: { gold: -10, HP: +5 }, type: 'buff', desc: 'Lose 10 gold, gain 5 HP.' },
        { label: 'Ignore his plea',                   effect: { },            type: 'neutral', desc: 'No effect.' },
        { label: 'Mock him and walk away',            effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' }
      ]
    },
    {
      text: 'An alchemist offers you a strange potion.',
      choices: [
        { label: 'Drink it bravely',                  effect: { MP: +20, HP: -15 }, type: 'buff', desc: 'Gain 20 MP but lose 15 HP.' },
        { label: 'Buy a vial',                        effect: { gold: -20, MP: +15 }, type: 'buff', desc: 'Lose 20 gold, gain 15 MP.' },
        { label: 'Politely decline',                  effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'You spot a sturdy shield left against the wall.',
      choices: [
        { label: 'Take it for yourself',              effect: { DEF: +3 },    type: 'buff',    desc: 'Gain +3 DEF.' },
        { label: 'Sell it to a merchant',             effect: { gold: +30 },   type: 'buff',    desc: 'Gain 30 gold.' },
        { label: 'Leave it for someone else',         effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A wounded soldier asks for your help.',
      choices: [
        { label: 'Tend to his wounds',                effect: { HP: +10 },    type: 'buff',    desc: 'Gain 10 HP.' },
        { label: 'Rob him while he’s weak',           effect: { gold: +25, HP: -5 }, type: 'harm', desc: 'Gain 25 gold, lose 5 HP.' },
        { label: 'Walk away swiftly',                 effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'You discover an enchanted gem pulsating with energy.',
      choices: [
        { label: 'Harness its power',                 effect: { MAG_DEF: +3 }, type: 'buff',    desc: 'Gain +3 Mag Def.' },
        { label: 'Sell it for a profit',              effect: { gold: +80 },   type: 'buff',    desc: 'Gain 80 gold.' },
        { label: 'Destroy it to be safe',             effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' }
      ]
    },
    {
      text: 'A ghostly wail chills the air around you.',
      choices: [
        { label: 'Stand your ground',                 effect: { DEF: +2 },    type: 'buff',    desc: 'Gain +2 DEF.' },
        { label: 'Flee in terror',                    effect: { HP: -10 },    type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Call out to the spirit',            effect: { MP: -5, HP: +5 }, type: 'buff', desc: 'Lose 5 MP, gain 5 HP.' }
      ]
    },
    {
      text: 'A hidden pressure plate clicks beneath your foot.',
      choices: [
        { label: 'Leap aside just in time',           effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Trigger it with a stone',           effect: { },            type: 'neutral', desc: 'No effect.' },
        { label: 'Insult the trap-maker',             effect: { ATK: +1 },     type: 'buff',    desc: 'Gain +1 ATK.' }
      ]
    },
    {
      text: 'You find a scroll of battlefield tactics.',
      choices: [
        { label: 'Study it intensively',             effect: { ATK: +2, DEF: +2 }, type: 'buff', desc: 'Gain +2 ATK & +2 DEF.' },
        { label: 'Sell it to the highest bidder',    effect: { gold: +60 },    type: 'buff',    desc: 'Gain 60 gold.' },
        { label: 'Tear it up for kindling',          effect: { MP: -5 },       type: 'harm',    desc: 'Lose 5 MP.' }
      ]
    },
    {
      text: 'An old wizard offers to enchant your armor.',
      choices: [
        { label: 'Accept the enchantment',           effect: { DEF: +5, gold: -50 }, type: 'buff', desc: 'Gain +5 DEF, lose 50 gold.' },
        { label: 'Bargain for a cheaper price',      effect: { DEF: +3, gold: -25 }, type: 'buff', desc: 'Gain +3 DEF, lose 25 gold.' },
        { label: 'Refuse his services',              effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A stray arrow whizzes past your ear.',
      choices: [
        { label: 'Track the shooter',                effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Take cover',                       effect: { DEF: +1 },     type: 'buff',    desc: 'Gain +1 DEF.' },
        { label: 'Mock the archer’s aim',            effect: { MP: +5 },      type: 'buff',    desc: 'Gain 5 MP.' }
      ]
    },
    {
      text: 'You stumble upon a merchant caravan under attack.',
      choices: [
        { label: 'Charge to their rescue',           effect: { EXP: +20, HP: -15 }, type: 'buff', desc: 'Gain 20 EXP, lose 15 HP.' },
        { label: 'Loot the abandoned wagons',        effect: { gold: +80 },    type: 'buff',    desc: 'Gain 80 gold.' },
        { label: 'Sneak away quietly',               effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A friendly raven offers you a shiny trinket.',
      choices: [
        { label: 'Accept the gift',                  effect: { gold: +20 },    type: 'buff',    desc: 'Gain 20 gold.' },
        { label: 'Kick the raven away',              effect: { HP: -5 },       type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Ignore the bird',                  effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'The ground shakes—an earthquake tremor!',
      choices: [
        { label: 'Brace yourself',                   effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Jump to safety',                   effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Cast stability spell',             effect: { MP: -10, DEF: +2 }, type: 'buff', desc: 'Lose 10 MP, gain 2 DEF.' }
      ]
    },
    {
      text: 'You find a pile of healing herbs.',
      choices: [
        { label: 'Brew a poultice and heal',         effect: { HP: +20 },     type: 'buff',    desc: 'Restore 20 HP.' },
        { label: 'Sell them to a healer',            effect: { gold: +30 },    type: 'buff',    desc: 'Gain 30 gold.' },
        { label: 'Eat a handful absent-mindedly',    effect: { HP: -5 },       type: 'harm',    desc: 'Lose 5 HP.' }
      ]
    },
    {
      text: 'A spider pit opens beneath you.',
      choices: [
        { label: 'Jump out at the last moment',      effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Use your shield to block bites',   effect: { DEF: +1 },     type: 'buff',    desc: 'Gain +1 DEF.' },
        { label: 'Let it swallow you briefly',       effect: { HP: -15 },     type: 'harm',    desc: 'Lose 15 HP.' }
      ]
    },
    {
      text: 'You overturn a barrel of apples.',
      choices: [
        { label: 'Eat several to restore energy',    effect: { HP: +10 },     type: 'buff',    desc: 'Restore 10 HP.' },
        { label: 'Sell the apples at market',        effect: { gold: +20 },    type: 'buff',    desc: 'Gain 20 gold.' },
        { label: 'Slip on one and fall',             effect: { HP: -5 },       type: 'harm',    desc: 'Lose 5 HP.' }
      ]
    },
    {
      text: 'A cursed mirror shows a twisted reflection.',
      choices: [
        { label: 'Shatter the mirror immediately',   effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Study it for arcane clues',        effect: { MAG_ATK: +1 }, type: 'buff',    desc: 'Gain +1 Mag Atk.' },
        { label: 'Ignore the reflection',            effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'You shake a beehive and bees swarm out.',
      choices: [
        { label: 'Smash it quickly',                 effect: { gold: +15, HP: -10 }, type: 'buff', desc: 'Gain 15 gold, lose 10 HP.' },
        { label: 'Use smoke to calm the bees',      effect: { MP: -5 },      type: 'harm',    desc: 'Lose 5 MP.' },
        { label: 'Retreat slowly',                   effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' }
      ]
    },
    {
      text: 'An old fountain glitters with magical water.',
      choices: [
        { label: 'Drink for strength',               effect: { ATK: +2 },     type: 'buff',    desc: 'Gain +2 ATK.' },
        { label: 'Fill your flask to sell',          effect: { gold: +25 },    type: 'buff',    desc: 'Gain 25 gold.' },
        { label: 'Avoid it—it looks cursed',         effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A runaway horse charges down the corridor.',
      choices: [
        { label: 'Grab the reins to tame it',        effect: { DEF: +2, HP: -10 }, type: 'buff', desc: 'Gain +2 DEF, lose 10 HP.' },
        { label: 'Let it pass',                      effect: { },            type: 'neutral', desc: 'No effect.' },
        { label: 'Push it into a wall',              effect: { HP: -15 },     type: 'harm',    desc: 'Lose 15 HP.' }
      ]
    },
    {
      text: 'A lost child cries for help.',
      choices: [
        { label: 'Lead them back to safety',         effect: { HP: +10 },     type: 'buff',    desc: 'Gain 10 HP.' },
        { label: 'Charge them a toll to help',       effect: { gold: +20 },    type: 'buff',    desc: 'Gain 20 gold.' },
        { label: 'Ignore and hurry on',              effect: { HP: -5 },       type: 'harm',    desc: 'Lose 5 HP.' }
      ]
    },
    {
      text: 'You find a suspicious locked chest.',
      choices: [
        { label: 'Pick the lock',                    effect: { gold: +50, HP: -5 }, type: 'buff', desc: 'Gain 50 gold, lose 5 HP.' },
        { label: 'Smash it open',                    effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Leave it alone',                   effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A giant footprint fills you with awe.',
      choices: [
        { label: 'Press for its owner’s location',   effect: { EXP: +15 },    type: 'buff',    desc: 'Gain 15 EXP.' },
        { label: 'Mock its size',                    effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Walk away quietly',                effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A flickering lantern lights your way.',
      choices: [
        { label: 'Steady its flame',                 effect: { MP: +5 },      type: 'buff',    desc: 'Gain 5 MP.' },
        { label: 'Snuff it out',                     effect: { },            type: 'neutral', desc: 'No effect.' },
        { label: 'Break it for parts',               effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' }
      ]
    },
    {
      text: 'An ancient statue seems to watch you.',
      choices: [
        { label: 'Pray for guidance',                effect: { DEF: +2 },     type: 'buff',    desc: 'Gain +2 DEF.' },
        { label: 'Vandalize it for fun',             effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Ignore its presence',              effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'Thick brambles scratch at your arms.',
      choices: [
        { label: 'Push through quickly',             effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Cut a path carefully',             effect: { HP: -5, MP: -5 }, type: 'harm', desc: 'Lose 5 HP & 5 MP.' },
        { label: 'Find a safer route',               effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'You spot a hidden trapdoor in the floor.',
      choices: [
        { label: 'Descend into the darkness',        effect: { EXP: +20, HP: -10 }, type: 'buff', desc: 'Gain 20 EXP, lose 10 HP.' },
        { label: 'Cover it back up',                 effect: { gold: +10 },   type: 'buff',    desc: 'Gain 10 gold.' },
        { label: 'Step away cautiously',             effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'Soft flute music drifts through the hall.',
      choices: [
        { label: 'Follow the melody',                effect: { MP: +10 },     type: 'buff',    desc: 'Gain 10 MP.' },
        { label: 'Shout to scare the musician',      effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Block your ears and ignore it',    effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A wall suddenly collapses ahead.',
      choices: [
        { label: 'Dodge out of the way',             effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Use your shield to block debris',  effect: { DEF: +1 },     type: 'buff',    desc: 'Gain +1 DEF.' },
        { label: 'Run through before it falls',      effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' }
      ]
    },
    {
      text: 'You discover a patch of poisonous mushrooms.',
      choices: [
        { label: 'Harvest them carefully',           effect: { gold: +20 },    type: 'buff',    desc: 'Gain 20 gold.' },
        { label: 'Eat one out of curiosity',         effect: { HP: -20 },      type: 'harm',    desc: 'Lose 20 HP.' },
        { label: 'Leave them untouched',             effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A crystal cavern glows with soft light.',
      choices: [
        { label: 'Mine a shard for power',           effect: { MAG_ATK: +3, HP: -10 }, type: 'buff', desc: 'Gain +3 Mag Atk, lose 10 HP.' },
        { label: 'Sell crystals at market',          effect: { gold: +50 },    type: 'buff',    desc: 'Gain 50 gold.' },
        { label: 'Watch quietly and leave',          effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'Whispering winds carry strange words.',
      choices: [
        { label: 'Listen and learn',                 effect: { MAG_DEF: +2 }, type: 'buff',    desc: 'Gain +2 Mag Def.' },
        { label: 'Shout to silence them',            effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Ignore the voices',                effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A runestone puzzle blocks your path.',
      choices: [
        { label: 'Solve the puzzle',                 effect: { EXP: +25 },    type: 'buff',    desc: 'Gain 25 EXP.' },
        { label: 'Break the runestone',              effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Walk around it',                   effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A skeleton ambush springs to life!',
      choices: [
        { label: 'Fight bravely',                    effect: { EXP: +30, HP: -15 }, type: 'buff', desc: 'Gain 30 EXP, lose 15 HP.' },
        { label: 'Run past and evade',               effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Hide until it leaves',             effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'You find a holy altar shining with light.',
      choices: [
        { label: 'Pray for protection',               effect: { DEF: +3 },     type: 'buff',    desc: 'Gain +3 DEF.' },
        { label: 'Steal offerings',                   effect: { gold: +30 },    type: 'harm',    desc: 'Gain 30 gold.' },
        { label: 'Turn away respectfully',            effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A corrupted altar reeks of dark magic.',
      choices: [
        { label: 'Cleanse it with a spell',           effect: { MAG_ATK: +2, MP: -10 }, type: 'buff', desc: 'Gain +2 Mag Atk, lose 10 MP.' },
        { label: 'Loot dark artifacts',               effect: { gold: +50, HP: -10 }, type: 'buff', desc: 'Gain 50 gold, lose 10 HP.' },
        { label: 'Avoid it at all costs',             effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'An enchanted armor stand offers you gear.',
      choices: [
        { label: 'Equip the new armor',               effect: { DEF: +4 },     type: 'buff',    desc: 'Gain +4 DEF.' },
        { label: 'Sell it for parts',                 effect: { gold: +40 },    type: 'buff',    desc: 'Gain 40 gold.' },
        { label: 'Ignore its offer',                  effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A rickety bridge creaks underfoot.',
      choices: [
        { label: 'Cross quickly',                     effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' },
        { label: 'Reinforce with rope',               effect: { MP: -10, DEF: +2 }, type: 'buff', desc: 'Lose 10 MP, gain 2 DEF.' },
        { label: 'Find another way',                  effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'An ancient library houses dusty tomes.',
      choices: [
        { label: 'Read a spellbook',                  effect: { spellsLearned: 1 }, type: 'buff', desc: 'Learn a new spell.' },
        { label: 'Sell a rare volume',                effect: { gold: +60 },    type: 'buff',    desc: 'Gain 60 gold.' },
        { label: 'Take a nap among the books',        effect: { HP: +10 },      type: 'buff',    desc: 'Gain 10 HP.' }
      ]
    },
    {
      text: 'You awaken a sleeping dragon in a cavern.',
      choices: [
        { label: 'Sneak away quietly',                effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Offer it treasure',                 effect: { gold: -50, HP: -5 }, type: 'harm',desc: 'Lose 50 gold & 5 HP.' },
        { label: 'Challenge it bravely',              effect: { HP: -30, EXP: +50 }, type: 'buff', desc: 'Gain 50 EXP, lose 30 HP.' }
      ]
    },
    {
      text: 'A friendly cat rubs against your leg.',
      choices: [
        { label: 'Pet it for comfort',                effect: { HP: +5 },      type: 'buff',    desc: 'Gain 5 HP.' },
        { label: 'Shoo it away',                      effect: { MP: -5 },      type: 'harm',    desc: 'Lose 5 MP.' },
        { label: 'Feed it some fish',                 effect: { gold: -10, HP: +5 }, type: 'buff', desc: 'Lose 10 gold, gain 5 HP.' }
      ]
    },
    {
      text: 'You release pixies trapped in a cage.',
      choices: [
        { label: 'They bless you before leaving',     effect: { EXP: +20 },    type: 'buff',    desc: 'Gain 20 EXP.' },
        { label: 'You collect them as curios',        effect: { gold: +30 },    type: 'harm',    desc: 'Gain 30 gold.' },
        { label: 'Leave them and move on',            effect: { },            type: 'neutral', desc: 'No effect.' }
      ]
    },
    {
      text: 'A mystic portal shimmers before you.',
      choices: [
        { label: 'Step through bravely',              effect: { EXP: +30 },    type: 'buff',    desc: 'Gain 30 EXP.' },
        { label: 'Throw a rock through first',        effect: { MP: -5 },      type: 'harm',    desc: 'Lose 5 MP.' },
        { label: 'Close the portal safely',           effect: { DEF: +2 },     type: 'buff',    desc: 'Gain 2 DEF.' }
      ]
    },
    {
      text: 'You cross a frozen lake—ice cracks beneath you.',
      choices: [
        { label: 'Run to the other side',             effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Cast a warming spell',              effect: { MP: -10, HP: +5 }, type: 'buff', desc: 'Lose 10 MP, gain 5 HP.' },
        { label: 'Carefully inch forward',            effect: { HP: -5 },      type: 'harm',    desc: 'Lose 5 HP.' }
      ]
    },
    {
      text: 'A stone golem statue awakens to block your way.',
      choices: [
        { label: 'Strike its weak point',            effect: { EXP: +40, HP: -20 }, type: 'buff', desc: 'Gain 40 EXP, lose 20 HP.' },
        { label: 'Dodge around it',                   effect: { HP: -10 },     type: 'harm',    desc: 'Lose 10 HP.' },
        { label: 'Pray for mercy',                    effect: { MP: -10 },     type: 'harm',    desc: 'Lose 10 MP.' }
      ]
    }
  ];
  