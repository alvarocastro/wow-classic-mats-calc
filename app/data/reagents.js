import sources from 'wow-classic-mats-calc/data/sources';

export class Reagent {
  constructor (id, name, source) {
    this.id = id;
    this.source = source;
    this.name = name;
  }
}

export default {
  arthasTears: new Reagent(8836, 'Arthas\' Tears', sources.herbalism),
  blackLotus: new Reagent(13468, 'Black Lotus', sources.herbalism),
  blindweed: new Reagent(8839, 'Blindweed', sources.herbalism),
  briarthorn: new Reagent(2450, 'Briarthorn', sources.herbalism),
  bruiseweed: new Reagent(2453, 'Bruiseweed', sources.herbalism),
  dreamfoil: new Reagent(13463, 'Dreamfoil', sources.herbalism),
  fadeleaf: new Reagent(3818, 'Fadeleaf', sources.herbalism),
  firebloom: new Reagent(4625, 'Firebloom', sources.herbalism),
  ghostMushroom: new Reagent(8845, 'Ghost Mushroom', sources.herbalism),
  goldenSansam: new Reagent(13464, 'Golden Sansam', sources.herbalism),
  goldthorn: new Reagent(3821, 'Goldthorn', sources.herbalism),
  graveMoss: new Reagent(3369, 'Grave Moss', sources.herbalism),
  gromsblood: new Reagent(8846, 'Gromsblood', sources.herbalism),
  icecap: new Reagent(13467, 'Icecap', sources.herbalism),
  khadgarsWhisker: new Reagent(3358, 'Khadgar\'s Whisker', sources.herbalism),
  liferoot: new Reagent(3357, 'Liferoot', sources.herbalism),
  mountainSilversage: new Reagent(13465, 'Mountain Silversage', sources.herbalism),
  plaguebloom: new Reagent(13466, 'Plaguebloom', sources.herbalism),
  purpleLotus: new Reagent(8831, 'Purple Lotus', sources.herbalism),
  stranglekelp: new Reagent(3820, 'Stranglekelp', sources.herbalism),
  sungrass: new Reagent(8838, 'Sungrass', sources.herbalism),
  swiftthistle: new Reagent(2452, 'Swiftthistle', sources.herbalism),
  wildSteelbloom: new Reagent(3355, 'Wild Steelbloom', sources.herbalism),
  wintersBite: new Reagent(3819, 'Winter\'s Bite', sources.herbalism),

  chimaerokTenderloin: new Reagent(21024, 'Chimaerok Tenderloin', sources.drop),
  deeprockSalt: new Reagent(8150, 'Deeprock Salt', sources.drop),
  elementalEarth: new Reagent(7067, 'Elemental Earth', sources.drop),
  elementalFire: new Reagent(7068, 'Elemental Fire', sources.drop),
  elementalWater: new Reagent(7070, 'Elemental Water', sources.drop),
  giantEgg: new Reagent(12207, 'Giant Egg', sources.drop),
  heartOfTheWild: new Reagent(10286, 'Heart of the Wild', sources.drop),
  heavyKodoMeat: new Reagent(12204, 'Heavy Kodo Meat', sources.drop),
  hugeVenomSac: new Reagent(19441, 'Huge Venom Sac', sources.drop),
  largeVenomSac: new Reagent(1288, 'Large Venom Sac', sources.drop),
  runecloth: new Reagent(14047, 'Runecloth', sources.drop),
  smallVenomSac: new Reagent(1475, 'Small Venom Sac', sources.drop),
  sandwormMeat: new Reagent(20424, 'Sandworm Meat', sources.drop),
  tenderCrabMeat: new Reagent(12206, 'Tender Crab Meat', sources.drop),
  tenderWolfMeat: new Reagent(12208, 'Tender Wolf Meat', sources.drop),
  volatileRum: new Reagent(9260, 'Volatile Rum', sources.drop),
  whiteSpiderMeat: new Reagent(12205, 'White Spider Meat', sources.drop),

  snickerfangJowl: new Reagent(8391, 'Snickerfang Jowl', sources.drop),
  blastedBoarLung: new Reagent(8392, 'Blasted Boar Lung', sources.drop),
  scorpokPincer: new Reagent(8393, 'Scorpok Pincer', sources.drop),
  basiliskBrain: new Reagent(8394, 'Basilisk Brain', sources.drop),
  vultureGizzard: new Reagent(8396, 'Vulture Gizzard', sources.drop),

  crystalVial: new Reagent(8925, 'Crystal Vial', sources.vendor),
  emptyVial: new Reagent(3371, 'Empty Vial', sources.vendor),
  hotSpices: new Reagent(2692, 'Hot Spices', sources.vendor),
  imbuedVial: new Reagent(18256, 'Imbued Vial', sources.vendor),
  leadedVial: new Reagent(3372, 'Leaded Vial', sources.vendor),
  refreshingSpringWater: new Reagent(159, 'Refreshing Spring Water', sources.vendor),
  soothingSpices: new Reagent(3713, 'Soothing Spices', sources.vendor),

  firefinSnapper: new Reagent(6359, 'Firefin Snapper', sources.fishing),
  oilyBlackmouth: new Reagent(6358, 'Oily Blackmouth', sources.fishing),
  rawGreaterSagefish: new Reagent(21153, 'Raw Greater Sagefish', sources.fishing),
  rawNightfinSnapper: new Reagent(13759, 'Raw Nightfin Snapper', sources.fishing),
  rawSunscaleSalmon: new Reagent(13760, 'Raw Sunscale Salmon', sources.fishing),
  stonescaleEel: new Reagent(13422, 'Stonescale Eel', sources.fishing),
  winterSquid: new Reagent(13755, 'Winter Squid', sources.fishing),

  denseStone: new Reagent(12365, 'Dense Stone', sources.mining),
  mithrilOre: new Reagent(3858, 'Mithril Ore', sources.mining),
  thoriumOre: new Reagent(10620, 'Thorium Ore', sources.mining),

  dreamDust: new Reagent(11176, 'Dream Dust', sources.enchanting),
  illusionDust: new Reagent(16204, 'Illusion Dust', sources.enchanting),
  largeBrilliantShard: new Reagent(14344, 'Large Brilliant Shard', sources.enchanting),

  runnTumTuber: new Reagent(18255, 'Runn Tum Tuber', sources.container),
};

