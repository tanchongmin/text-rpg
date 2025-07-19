// Starting equipment + medieval-themed drop tables
const equipmentConfig = {
  starting: {
    weapon: { name: 'Wooden Sword', ATK: 2, desc: 'A simple wooden blade.' },
    armor:  { name: 'Wooden Shield', DEF: 2, desc: 'A basic wooden shield.' },
    accessories: [null, null, null, null]
  },

  weapons: [
    { name: 'Iron Sword',        ATK: 5,  levelReq: 1, desc: 'A sturdy iron sword.' },
    { name: 'Steel Longsword',   ATK: 8,  levelReq: 2, desc: 'A sharp steel blade.' },
    { name: 'Silver Blade',      ATK: 11, levelReq: 3, desc: 'Effective vs dark creatures.' },
    { name: 'Flamberge',         ATK: 14, levelReq: 4, desc: 'Wavy blade that disorients.' },
    { name: 'Lionheart Blade',   ATK: 17, levelReq: 5, desc: 'Emblazoned with a lion crest.' },
    { name: 'Dragonscale Sword', ATK: 20, levelReq: 6, desc: 'Made from dragon scales.' },
    { name: 'Knight’s Falchion', ATK: 23, levelReq: 7, desc: 'Trusted by warriors.' },
    { name: 'Shadowfang',        ATK: 26, levelReq: 8, desc: 'A dark blade.' },
    { name: 'Celestial Saber',   ATK: 29, levelReq: 9, desc: 'Glows with light.' },
    { name: 'Excalibur Replica', ATK: 32, levelReq: 10,desc: 'Recreation of a legendary blade.' }
  ],

  armors: [
    { name: 'Iron Shield',       DEF: 5,  levelReq: 1, desc: 'A basic iron shield.' },
    { name: 'Steel Kite Shield', DEF: 8,  levelReq: 2, desc: 'Covers more of the body.' },
    { name: 'Brass Buckler',     DEF: 11, levelReq: 3, desc: 'Small but sturdy.' },
    { name: 'Knight’s Heater',   DEF: 14, levelReq: 4, desc: 'Used by royal guards.' },
    { name: 'Lioncrest Guard',   DEF: 17, levelReq: 5, desc: 'Regal insignia.' },
    { name: 'Dragonhide Ward',   DEF: 20, levelReq: 6, desc: 'Tough as dragon scales.' },
    { name: 'Silvershield',      DEF: 23, levelReq: 7, desc: 'Repels dark magic.' },
    { name: 'Ebon Barrier',      DEF: 26, levelReq: 8, desc: 'Midnight steel.' },
    { name: 'Aegis of Light',    DEF: 29, levelReq: 9, desc: 'Blessed by priests.' },
    { name: 'Aegis of Valor',    DEF: 32, levelReq:10, desc: 'Symbol of protection.' }
  ],

  accessories: [
    { name: 'Ring of Might',        effect:{ATK:1},     levelReq:1, desc:'Boosts attack.' },
    { name: 'Amulet of Protection', effect:{DEF:1},     levelReq:1, desc:'Wards off blows.' },
    { name: 'Band of Vigor',        effect:{HP:10},     levelReq:2, desc:'Increases vitality.' },
    { name: 'Charm of Wisdom',      effect:{MP:5},      levelReq:2, desc:'Sharpens mind.' },
    { name: 'Brooch of Fortitude',  effect:{HP:20},     levelReq:3, desc:'Strengthens endurance.' },
    { name: 'Ring of the Mage',     effect:{MAG_ATK:2}, levelReq:3, desc:'Empowers spells.' },
    { name: 'Talisman of Speed',    effect:{ATK:2},     levelReq:4, desc:'Quickens strikes.' },
    { name: 'Pendant of Shadows',   effect:{DEF:2},     levelReq:4, desc:'Blends you into darkness.' },
    { name: 'Emblem of Courage',    effect:{HP:30},     levelReq:5, desc:'Bolsters bravery.' },
    { name: 'Sigil of Sorcery',     effect:{MAG_DEF:2}, levelReq:5, desc:'Shields against magic.' },
    { name: 'Ring of Flames',       effect:{MAG_ATK:3}, levelReq:6, desc:'Adds fire to spells.' },
    { name: 'Cloak Pin of Frost',   effect:{MAG_DEF:3}, levelReq:6, desc:'Chills attacks.' },
    { name: 'Seal of Giants',       effect:{HP:50},     levelReq:7, desc:'Giant’s resilience.' },
    { name: 'Rune of Clarity',      effect:{MP:10},     levelReq:7, desc:'Clears your mind.' },
    { name: 'Gem of Lightning',     effect:{ATK:3},     levelReq:8, desc:'Shocks foes.' },
    { name: 'Orb of Reflection',    effect:{DEF:3},     levelReq:8, desc:'Reflects damage.' },
    { name: 'Heart of the Phoenix', effect:{HP:75},     levelReq:9, desc:'Revives once.' },
    { name: 'Staff Core of Mana',   effect:{MP:20},     levelReq:9, desc:'Boosts MP.' },
    { name: 'Crown of Kings',       effect:{ATK:5},     levelReq:10,desc:'Worn by royalty.' },
    { name: 'Shield Emblem of Faith',effect:{DEF:5},    levelReq:10,desc:'Blessed by the church.' },
    { name: 'Ring of Shadows',       effect:{ATK:1,DEF:1},levelReq:2, desc:'Dark protection.' },
    { name: 'Pendant of Life',       effect:{HP:15},    levelReq:3, desc:'Regenerates health.' },
    { name: 'Talisman of Mana',      effect:{MP:15},    levelReq:3, desc:'Regenerates mana.' },
    { name: 'Charm of Swiftness',    effect:{ATK:2},    levelReq:4, desc:'Quick reflexes.' },
    { name: 'Brooch of Steel',       effect:{DEF:2},    levelReq:4, desc:'Tough as metal.' },
    { name: 'Seal of Valor',         effect:{HP:40},    levelReq:5, desc:'Inspires courage.' },
    { name: 'Rune of Power',         effect:{ATK:4},    levelReq:6, desc:'Surge of strength.' },
    { name: 'Gem of Protection',     effect:{DEF:4},    levelReq:6, desc:'Protects from harm.' },
    { name: 'Orb of Vitality',       effect:{HP:60},    levelReq:7, desc:'Life essence.' },
    { name: 'Crown of Wisdom',       effect:{MP:30},    levelReq:7, desc:'Augments intellect.' },
    { name: 'Heart of Steel',        effect:{DEF:6},    levelReq:8, desc:'Unbreakable resolve.' }
  ]
};
