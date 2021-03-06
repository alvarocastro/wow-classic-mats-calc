import sources from 'wow-classic-mats-calc/data/sources';
import reagents from 'wow-classic-mats-calc/data/reagents';

class Consumable {
  constructor (id, name, source, reagents) {
    this.id = id;
    this.name = name;
    this.source = source;
    this.reagents = reagents;
  }
}

export default {
  elixirOfGiants: new Consumable(9206, 'Elixir of Giants', sources.alchemy, [
    { reagent: reagents.sungrass, amount: 1 },
    { reagent: reagents.gromsblood, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  elixirOfTheMongoose: new Consumable(13452, 'Elixir of the Mongoose', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.mountainSilversage, amount: 2 },
    { reagent: reagents.plaguebloom, amount: 2 }
  ]),
  elixirOfGreaterAgility: new Consumable(9187, 'Elixir of Greater Agility', sources.alchemy, [
    { reagent: reagents.sungrass, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),

  greaterArcaneProtectionPotion: new Consumable(13461, 'Greater Arcane Protection Potion', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamDust, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),
  greaterFireProtectionPotion: new Consumable(13457, 'Greater Fire Protection Potion', sources.alchemy, [
    { reagent: reagents.elementalFire, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),
  greaterFrostProtectionPotion: new Consumable(13456, 'Greater Frost Protection Potion', sources.alchemy, [
    { reagent: reagents.elementalWater, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),
  frostProtectionPotion: new Consumable(6050, 'Frost Protection Potion', sources.alchemy, [
    { reagent: reagents.wintersBite, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 }
  ]),
  greaterNatureProtectionPotion: new Consumable(13458, 'Greater Nature Protection Potion', sources.alchemy, [
    { reagent: reagents.elementalEarth, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),
  natureProtectionPotion: new Consumable(6052, 'Nature Protection Potion', sources.alchemy, [
    { reagent: reagents.liferoot, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 },
    { reagent: reagents.stranglekelp, amount: 1 }
  ]),
  greaterShadowProtectionPotion: new Consumable(13459, 'Greater Shadow Protection Potion', sources.alchemy, [
    { reagent: reagents.graveMoss, amount: 4 },
    { reagent: reagents.leadedVial, amount: 1 },
    { reagent: reagents.fadeleaf, amount: 4 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),

  elixirOfPoisonResistance: new Consumable(3386, 'Elixir of Poison Resistance', sources.alchemy, [
    { reagent: reagents.largeVenomSac, amount: 1 },
    { reagent: reagents.bruiseweed, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 }
  ]),
  restorativePotion: new Consumable(9030, 'Restorative Potion', sources.alchemy, [
    { reagent: reagents.elementalEarth, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  antiVenom: new Consumable(6452, 'Anti-Venom', sources.firstaid, [
    { reagent: reagents.smallVenomSac, amount: 1 }
  ]),
  strongAntiVenom: new Consumable(6453, 'Strong Anti-Venom', sources.firstaid, [
    { reagent: reagents.largeVenomSac, amount: 1 }
  ]),
  powerfulAntiVenom: new Consumable(19440, 'Powerful Anti-Venom', sources.firstaid, [
    { reagent: reagents.hugeVenomSac, amount: 1 }
  ]),

  greaterStoneshieldPotion: new Consumable(13455, 'Greater Stoneshield Potion', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 3 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.thoriumOre, amount: 1 },
    { reagent: reagents.stonescaleEel, amount: 3 }
  ]),
  lesserStoneshieldPotion: new Consumable(4623, 'Lesser Stoneshield Potion', sources.alchemy, [
    { reagent: reagents.mithrilOre, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 }
  ]),
  elixirOfSuperiorDefense: new Consumable(13445, 'Elixir of Superior Defense', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 2 },
    { reagent: reagents.sungrass, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.stonescaleEel, amount: 2 }
  ]),
  elixirOfGreaterDefense: new Consumable(8951, 'Elixir of Greater Defense', sources.alchemy, [
    { reagent: reagents.wildSteelbloom, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 },
  ]),

  elementalSharpeningStone: new Consumable(18262, 'Elemental Sharpening Stone', sources.blacksmithing, [
    { reagent: reagents.elementalEarth, amount: 2 },
    { reagent: reagents.denseStone, amount: 3 }
  ]),
  denseSharpeningStone: new Consumable(12404, 'Dense Sharpening Stone', sources.blacksmithing, [
    { reagent: reagents.denseStone, amount: 1 }
  ]),
  denseWeightstone: new Consumable(12643, 'Dense Weightstone', sources.blacksmithing, [
    { reagent: reagents.denseStone, amount: 1 },
    { reagent: reagents.runecloth, amount: 1 }
  ]),
  frostOil: new Consumable(3829, 'Frost Oil', sources.alchemy, [
    { reagent: reagents.khadgarsWhisker, amount: 4 },
    { reagent: reagents.wintersBite, amount: 2 },
    { reagent: reagents.leadedVial, amount: 1 },
  ]),
  brilliantManaOil: new Consumable(20748, 'Brilliant Mana Oil', sources.enchanting, [
    { reagent: reagents.largeBrilliantShard, amount: 2 },
    { reagent: reagents.purpleLotus, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  lesserManaOil: new Consumable(20747, 'Lesser Mana Oil', sources.enchanting, [
    { reagent: reagents.dreamDust, amount: 3 },
    { reagent: reagents.purpleLotus, amount: 2 },
    { reagent: reagents.crystalVial, amount: 1 },
  ]),
  brilliantWizardOil: new Consumable(20749, 'Brilliant Wizard Oil', sources.enchanting, [
    { reagent: reagents.firebloom, amount: 3 },
    { reagent: reagents.largeBrilliantShard, amount: 2 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  wizardOil: new Consumable(20750, 'Wizard Oil', sources.enchanting, [
    { reagent: reagents.illusionDust, amount: 3 },
    { reagent: reagents.firebloom, amount: 2 },
    { reagent: reagents.crystalVial, amount: 1 },
  ]),

  majorManaPotion: new Consumable(13444, 'Major Mana Potion', sources.alchemy, [
    { reagent: reagents.dreamfoil, amount: 3 },
    { reagent: reagents.icecap, amount: 2 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  majorHealingPotion: new Consumable(13446, 'Major Healing Potion', sources.alchemy, [
    { reagent: reagents.goldenSansam, amount: 2 },
    { reagent: reagents.mountainSilversage, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  majorRejuvenationPotion: new Consumable(18253, 'Major Rejuvenation Potion', sources.alchemy, [
    { reagent: reagents.heartOfTheWild, amount: 1 },
    { reagent: reagents.goldenSansam, amount: 4 },
    { reagent: reagents.dreamfoil, amount: 4 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),

  greaterArcaneElixir: new Consumable(13454, 'Greater Arcane Elixir', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 3 },
    { reagent: reagents.mountainSilversage, amount: 1 }
  ]),
  arcaneElixir: new Consumable(9155, 'Arcane Elixir', sources.alchemy, [
    { reagent: reagents.blindweed, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  elixirOfGreaterFirepower: new Consumable(21546, 'Elixir of Greater Firepower', sources.alchemy, [
    { reagent: reagents.emptyVial, amount: 3 },
    { reagent: reagents.firebloom, amount: 3 },
    { reagent: reagents.firefinSnapper, amount: 6 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  elixirOfShadowPower: new Consumable(9264, 'Elixir of Shadow Power', sources.alchemy, [
    { reagent: reagents.ghostMushroom, amount: 3 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),

  limitedInvulnerabilityPotion: new Consumable(3387, 'Limited Invulnerability Potion', sources.alchemy, [
    { reagent: reagents.blindweed, amount: 2 },
    { reagent: reagents.ghostMushroom, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  freeActionPotion: new Consumable(5634, 'Free Action Potion', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 1 },
    { reagent: reagents.stranglekelp, amount: 1 },
    { reagent: reagents.oilyBlackmouth, amount: 4 },
    { reagent: reagents.emptyVial, amount: 2 }
  ]),
  giftOfArthas: new Consumable(9088, 'Gift of Arthas', sources.alchemy, [
    { reagent: reagents.arthasTears, amount: 1 },
    { reagent: reagents.blindweed, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  swiftnessPotion: new Consumable(2459, 'Swiftness Potion', sources.alchemy, [
    { reagent: reagents.briarthorn, amount: 1 },
    { reagent: reagents.swiftthistle, amount: 1 },
    { reagent: reagents.emptyVial, amount: 1 }
  ]),
  mightyRagePotion: new Consumable(13442, 'Mighty Rage Potion', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.gromsblood, amount: 3 }
  ]),
  elixirOfFortitude: new Consumable(3825, 'Elixir of Fortitude', sources.alchemy, [
    { reagent: reagents.wildSteelbloom, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 }
  ]),
  majorTrollsBloodPotion: new Consumable(20004, 'Major Troll\'s Blood Potion', sources.alchemy, [
    { reagent: reagents.gromsblood, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.plaguebloom, amount: 2 }
  ]),
  mightyTrollsBloodPotion: new Consumable(3826, 'Mighty Troll\'s Blood Potion', sources.alchemy, [
    { reagent: reagents.liferoot, amount: 1 },
    { reagent: reagents.bruiseweed, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 },
  ]),
  magebloodPotion: new Consumable(20007, 'Mageblood Potion', sources.alchemy, [
    { reagent: reagents.dreamfoil, amount: 1 },
    { reagent: reagents.plaguebloom, amount: 2 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),

  smokedDesertDumplings: new Consumable(20452, 'Smoked Desert Dumplings', sources.cooking, [
    { reagent: reagents.soothingSpices, amount: 1 },
    { reagent: reagents.sandwormMeat, amount: 1 }
  ]),
  dirgesKickinChimaerokChops: new Consumable(21023, 'Dirge\'s Kickin\' Chimaerok Chops', sources.cooking, [
    { reagent: reagents.hotSpices, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 },
    { reagent: reagents.firebloom, amount: 1 },
    { reagent: reagents.deeprockSalt, amount: 1 },
    { reagent: reagents.volatileRum, amount: 1 },
    { reagent: reagents.chimaerokTenderloin, amount: 1 }
  ]),
  grilledSquid: new Consumable(13928, 'Grilled Squid', sources.cooking, [
    { reagent: reagents.soothingSpices, amount: 1 },
    { reagent: reagents.winterSquid, amount: 1 }
  ]),
  runnTumTuberSurprise: new Consumable(18254, 'Runn Tum Tuber Surprise', sources.cooking, [
    { reagent: reagents.soothingSpices, amount: 1 },
    { reagent: reagents.runnTumTuber, amount: 1 }
  ]),
  spicedChiliCrab: new Consumable(12216, 'Spiced Chili Crab', sources.cooking, [
    { reagent: reagents.tenderCrabMeat, amount: 1 },
    { reagent: reagents.hotSpices, amount: 2 },
  ]),
  monsterOmelet: new Consumable(12218, 'Monster Omelet', sources.cooking, [
    { reagent: reagents.giantEgg, amount: 1 },
    { reagent: reagents.soothingSpices, amount: 2 },
  ]),
  tenderWolfSteak: new Consumable(18045, 'Tender Wolf Steak', sources.cooking, [
    { reagent: reagents.tenderWolfMeat, amount: 1 },
    { reagent: reagents.soothingSpices, amount: 1 },
  ]),
  heavyKodoStew: new Consumable(12215, 'Heavy Kodo Stew', sources.cooking, [
    { reagent: reagents.heavyKodoMeat, amount: 2 },
    { reagent: reagents.soothingSpices, amount: 1 },
    { reagent: reagents.refreshingSpringWater, amount: 1 },
  ]),
  spiderSausage: new Consumable(17222, 'Spider Sausage', sources.cooking, [
    { reagent: reagents.whiteSpiderMeat, amount: 2 },
  ]),

  nightfinSoup: new Consumable(13931, 'Nightfin Soup', sources.cooking, [
    { reagent: reagents.refreshingSpringWater, amount: 1 },
    { reagent: reagents.rawNightfinSnapper, amount: 1 }
  ]),
  sagefishDelight: new Consumable(21217, 'Sagefish Delight', sources.cooking, [
    { reagent: reagents.hotSpices, amount: 1 },
    { reagent: reagents.rawGreaterSagefish, amount: 1 }
  ]),
  poachedSunscaleSalmon: new Consumable(13932, 'Poached Sunscale Salmon', sources.cooking, [
    { reagent: reagents.rawSunscaleSalmon, amount: 1 },
  ]),

  flaskOfTheTitans: new Consumable(13510, 'Flask of the Titans', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 10 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.gromsblood, amount: 30 },
    { reagent: reagents.stonescaleEel, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),
  flaskOfSupremePower: new Consumable(13512, 'Flask of Supreme Power', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 30 },
    { reagent: reagents.mountainSilversage, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),
  flaskOfDistilledWisdom: new Consumable(13511, 'Flask of Distilled Wisdom', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 30 },
    { reagent: reagents.icecap, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),
  flaskOfPetrification: new Consumable(13506, 'Flask of Petrification', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 30 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.stonescaleEel, amount: 30 },
    { reagent: reagents.mountainSilversage, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),
  flaskOfChromaticResistance: new Consumable(13513, 'Flask of Chromatic Resistance', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.icecap, amount: 30 },
    { reagent: reagents.mountainSilversage, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),

  roids: new Consumable(8410, 'R.O.I.D.S.', sources.quest, [
    { reagent: reagents.snickerfangJowl, amount: 3 },
    { reagent: reagents.blastedBoarLung, amount: 2 },
    { reagent: reagents.scorpokPincer, amount: 1 },
  ]),
  lungJuiceCocktail: new Consumable(8411, 'Lung Juice Cocktail', sources.quest, [
    { reagent: reagents.blastedBoarLung, amount: 3 },
    { reagent: reagents.scorpokPincer, amount: 2 },
    { reagent: reagents.basiliskBrain, amount: 1 },
  ]),
  groundScorpokAssay: new Consumable(8412, 'Ground Scorpok Assay', sources.quest, [
    { reagent: reagents.scorpokPincer, amount: 3 },
    { reagent: reagents.vultureGizzard, amount: 2 },
    { reagent: reagents.blastedBoarLung, amount: 1 },
  ]),
  cerebralCortexCompound: new Consumable(8423, 'Cerebral Cortex Compound', sources.quest, [
    { reagent: reagents.basiliskBrain, amount: 10 },
    { reagent: reagents.vultureGizzard, amount: 2 },
  ]),
};
