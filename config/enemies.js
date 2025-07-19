// 50 medieval‑themed enemies scaling by level
const enemiesConfig = [
    { name:'Goblin Scout',      level:1,  HP:30,  MP:5,  ATK:5,  DEF:2,  MAG_DEF:1, exp:10,  gold:5  },
    { name:'Wild Wolf',         level:1,  HP:35,  MP:0,  ATK:6,  DEF:3,  MAG_DEF:1, exp:12,  gold:6  },
    { name:'Skeleton Warrior',  level:2,  HP:50,  MP:5,  ATK:8,  DEF:4,  MAG_DEF:2, exp:20,  gold:10 },
    { name:'Bandit Thief',      level:2,  HP:45,  MP:10, ATK:9,  DEF:3,  MAG_DEF:2, exp:22,  gold:12 },
    { name:'Dark Archer',       level:3,  HP:60,  MP:10, ATK:12, DEF:5,  MAG_DEF:3, exp:30,  gold:15 },
    { name:'Cave Spider',       level:3,  HP:55,  MP:0,  ATK:10, DEF:4,  MAG_DEF:1, exp:28,  gold:14 },
    { name:'Orc Grunt',         level:4,  HP:80,  MP:5,  ATK:14, DEF:6,  MAG_DEF:3, exp:40,  gold:20 },
    { name:'Vampire Spawn',     level:4,  HP:75,  MP:15, ATK:16, DEF:5,  MAG_DEF:4, exp:42,  gold:22 },
    { name:'Troll Brute',       level:5,  HP:110, MP:0,  ATK:18, DEF:8,  MAG_DEF:2, exp:55,  gold:25 },
    { name:'Wraith',            level:5,  HP:90,  MP:20, ATK:15, DEF:6,  MAG_DEF:5, exp:58,  gold:28 },
    { name:'Silver Knight',     level:6,  HP:120, MP:10, ATK:20, DEF:10, MAG_DEF:4, exp:70,  gold:35 },
    { name:'Stone Golem',       level:6,  HP:140, MP:0,  ATK:18, DEF:12, MAG_DEF:3, exp:72,  gold:36 },
    { name:'Dark Mage',         level:7,  HP:85,  MP:30, ATK:10, DEF:5,  MAG_DEF:6, exp:85,  gold:40 },
    { name:'Hellhound',         level:7,  HP:100, MP:10, ATK:22, DEF:7,  MAG_DEF:3, exp:88,  gold:42 },
    { name:'Ogre Warlord',      level:8,  HP:160, MP:0,  ATK:25, DEF:12, MAG_DEF:4, exp:100, gold:50 },
    { name:'Spectral Knight',   level:8,  HP:110, MP:40, ATK:20, DEF:8,  MAG_DEF:7, exp:102, gold:52 },
    { name:'Lich Apprentice',   level:9,  HP:95,  MP:50, ATK:12, DEF:6,  MAG_DEF:8, exp:115, gold:55 },
    { name:'Wyvern',            level:9,  HP:130, MP:20, ATK:28, DEF:10, MAG_DEF:5, exp:118, gold:58 },
    { name:'Dragon Whelp',      level:10, HP:150, MP:30, ATK:30, DEF:12, MAG_DEF:6, exp:130, gold:60 },
    { name:'Knight Champion',   level:10, HP:140, MP:20, ATK:32, DEF:14, MAG_DEF:6, exp:132, gold:62 },
    // … up to 50 enemies, scaling similarly …
  ];
  