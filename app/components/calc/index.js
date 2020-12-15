import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import store from 'store2';
import craftables from 'wow-classic-mats-calc/data';

class ShopList {
  constructor () {
    this.items = [];
  }

  add (newItem, amount) {
    let i = this.items.find(({item}) => item.id === newItem.id);

    if (!i) {
      this.items.push({
        item: newItem,
        amount: amount
      });
    } else {
      i.amount += amount;
    }
  }
}

export default class CalcComponent extends Component {
  @tracked shopList = [];
  @tracked isTwoColumns = store.get('twoColumns') ?? false;

  craftables = craftables;

  @tracked isWelcomeMessageVisible = store.get('welcomeMessage') ?? true;
  @tracked isHeadsUpMessageVisible = store.get('headsUpMessage') ?? false;

  constructor () {
    super(...arguments);
    this.refreshMatsList();
  }

  refreshMatsList () {
    const shopList = new ShopList();

    craftables.forEach(({item, amount, hidden}) => {
      if (amount > 0 && !hidden) {
        item.reagents.forEach(req => shopList.add(req.reagent, req.amount * amount));
      }
    });

    this.shopList = shopList.items;
  }

  @action handleCraftablesChange () {
    this.refreshMatsList();
  }

  @action hideWelcomeMessage () {
    this.isWelcomeMessageVisible = false;
    this.isHeadsUpMessageVisible = true;

    store.set('welcomeMessage', false);
    store.set('headsUpMessage', true);
  }

  @action hideHeadsUpMessage () {
    this.isHeadsUpMessageVisible = false;
    store.set('headsUpMessage', false);
  }

  @action toggleLayout () {
    this.isTwoColumns = !this.isTwoColumns;
    store.set('twoColumns', this.isTwoColumns);
  }

  @action clearData (event) {
    const ans = confirm('You are about to reset all the settings stored by the tool. Are you sure?');

    event.preventDefault();

    if (ans) {
      store.clear();
      window.location = '/';
    }
  }
}
