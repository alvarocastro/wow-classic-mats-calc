import { tracked } from '@glimmer/tracking';
import store from 'store2';
import consumables from 'wow-classic-mats-calc/data/consumables';
import reagents from 'wow-classic-mats-calc/data/reagents';

class Craftable {
  @tracked amount;
  @tracked hidden;

  constructor (item, amount, { hidden }) {
    this.item = item;
    const saved = this.load();

    this.amount = saved?.amount ?? Number(amount);
    this.hidden = saved?.hidden ?? Boolean(hidden);
  }

  load () {
    return store.get(`craft_${this.item.id}`);
  }

  persist () {
    store.set(`craft_${this.item.id}`, {
      amount: this.amount,
      hidden: this.hidden
    });
  }

  hide () {
    this.hidden = true;
    this.persist();
  }

  show () {
    this.hidden = false;
    this.persist();
  }

  setAmount (amount = 0) {
    this.amount = Number(amount);
    this.persist();
  }
}

export default [
  // Stat potions
  new Craftable(consumables.elixirOfGiants, 0, { hidden: false }),

  new Craftable(consumables.elixirOfTheMongoose, 0, { hidden: false }),
  new Craftable(consumables.elixirOfGreaterAgility, 0, { hidden: true }),

  // Magic protection potions
  new Craftable(consumables.greaterArcaneProtectionPotion, 0, { hidden: false }),
  new Craftable(consumables.greaterFireProtectionPotion, 0, { hidden: false }),
  new Craftable(consumables.greaterFrostProtectionPotion, 0, { hidden: false }),
  new Craftable(consumables.frostProtectionPotion, 0, { hidden: true }),
  new Craftable(consumables.greaterNatureProtectionPotion, 0, { hidden: false }),
  new Craftable(consumables.natureProtectionPotion, 0, { hidden: true }),
  new Craftable(consumables.greaterShadowProtectionPotion, 0, { hidden: false }),

  // Poison cures
  new Craftable(consumables.elixirOfPoisonResistance, 0, { hidden: false }),
  new Craftable(consumables.restorativePotion, 0, { hidden: true }),
  new Craftable(consumables.antiVenom, 0, { hidden: true }),
  new Craftable(consumables.strongAntiVenom, 0, { hidden: true }),
  new Craftable(consumables.powerfulAntiVenom, 0, { hidden: true }),

  // Armor potions
  new Craftable(consumables.greaterStoneshieldPotion, 0, { hidden: false }),
  new Craftable(consumables.lesserStoneshieldPotion, 0, { hidden: true }),
  new Craftable(consumables.elixirOfSuperiorDefense, 0, { hidden: false }),
  new Craftable(consumables.elixirOfGreaterDefense, 0, { hidden: true }),

  // Weapon enhancements
  new Craftable(consumables.elementalSharpeningStone, 0, { hidden: false }),
  new Craftable(consumables.denseSharpeningStone, 0, { hidden: false }),
  new Craftable(consumables.denseWeightstone, 0, { hidden: true }),
  new Craftable(consumables.frostOil, 0, { hidden: true }),
  new Craftable(consumables.brilliantManaOil, 0, { hidden: false }),
  new Craftable(consumables.lesserManaOil, 0, { hidden: true }),
  new Craftable(consumables.brilliantWizardOil, 0, { hidden: false }),
  new Craftable(consumables.wizardOil, 0, { hidden: true }),

  // Restoration potions
  new Craftable(consumables.majorManaPotion, 0, { hidden: true }),
  new Craftable(consumables.majorHealingPotion, 0, { hidden: true }),
  new Craftable(consumables.majorRejuvenationPotion, 0, { hidden: false }),

  // Spellpower potions
  new Craftable(consumables.greaterArcaneElixir, 0, { hidden: false }),
  new Craftable(consumables.arcaneElixir, 0, { hidden: true }),
  new Craftable(consumables.elixirOfGreaterFirepower, 0, { hidden: false }),
  new Craftable(consumables.elixirOfShadowPower, 0, { hidden: false }),

  // Util potions
  new Craftable(consumables.limitedInvulnerabilityPotion, 0, { hidden: true }),
  new Craftable(consumables.freeActionPotion, 0, { hidden: false }),
  new Craftable(consumables.giftOfArthas, 0, { hidden: true }),
  new Craftable(consumables.swiftnessPotion, 0, { hidden: true }),
  new Craftable(consumables.mightyRagePotion, 0, { hidden: true }),
  new Craftable(consumables.elixirOfFortitude, 0, { hidden: true }),
  new Craftable(consumables.majorTrollsBloodPotion, 0, { hidden: true }),
  new Craftable(consumables.mightyTrollsBloodPotion, 0, { hidden: true }),
  new Craftable(consumables.magebloodPotion, 0, { hidden: true }),

  // Stat foods
  new Craftable(consumables.smokedDesertDumplings, 0, { hidden: false }),
  new Craftable(consumables.dirgesKickinChimaerokChops, 0, { hidden: true }),
  new Craftable(consumables.grilledSquid, 0, { hidden: false }),
  new Craftable(consumables.runnTumTuberSurprise, 0, { hidden: false }),
  new Craftable(consumables.spicedChiliCrab, 0, { hidden: true }),
  new Craftable(consumables.monsterOmelet, 0, { hidden: true }),
  new Craftable(consumables.tenderWolfSteak, 0, { hidden: true }),
  new Craftable(consumables.heavyKodoStew, 0, { hidden: true }),
  new Craftable(consumables.spiderSausage, 0, { hidden: true }),

  // Util foods
  new Craftable(consumables.nightfinSoup, 0, { hidden: false }),
  new Craftable(consumables.sagefishDelight, 0, { hidden: true }),
  new Craftable(consumables.poachedSunscaleSalmon, 0, { hidden: true }),

  // Flasks
  new Craftable(consumables.flaskOfTheTitans, 0, { hidden: false }),
  new Craftable(consumables.flaskOfSupremePower, 0, { hidden: false }),
  new Craftable(consumables.flaskOfDistilledWisdom, 0, { hidden: false }),
  new Craftable(consumables.flaskOfPetrification, 0, { hidden: true }),
  new Craftable(consumables.flaskOfChromaticResistance, 0, { hidden: true }),

  // Stat items
  new Craftable(consumables.roids, 0, { hidden: true }),
  new Craftable(consumables.lungJuiceCocktail, 0, { hidden: true }),
  new Craftable(consumables.groundScorpokAssay, 0, { hidden: true }),
];
