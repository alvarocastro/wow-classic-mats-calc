import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import craftables from 'wow-classic-mats-calc/data/craftables';

class Row {
  @tracked visible;
  @tracked amount;

  constructor (data) {
    this.visible = data.visible;
    this.amount = data.amount;
    this.item = data.item;
  }
}

export default class CraftablesListComponent extends Component {
  rows = [];
  shopList = [];

  constructor () {
    super(...arguments);
    this.shopList = this.args.shopList ?? [];
    this.rows = craftables.map(item => {
      const shopOrder = this.shopList.find(({id}) => item.id === id);
      let amount = 0;
      let visible = true;

      if (shopOrder) {
        amount = shopOrder.amount;
        visible = shopOrder.visible;
      }
      return new Row({
        visible: visible,
        amount: amount,
        item: item
      });
    });
  }

  refreshShopList () {
    const list = this.shopList.map(shopOrder => {
      return {
        ...shopOrder,
        visible: this.rows.find(row => row.item.id === shopOrder.id).visible
      }
    });

    this.args.onChangeShopList(list);
  }

  addToShopList (itemId, data = {}) {
    const item = this.shopList.find(({id}) => {
      return id === itemId;
    });

    if (item) {
      item.amount = data.amount ?? item.amount ?? 0;
      item.visibility = data.visibility ?? item.visibility ?? true;
    } else {
      this.shopList.push({
        id: itemId,
        amount: data.amount ?? 0,
        visibility: data.visibility ?? true
      });
    }

    this.refreshShopList();
  }

  @action setAmount (itemId, amount) {
    this.rows.find(row => row.item.id === itemId).amount = amount;
    this.addToShopList(itemId, {amount});
  }

  @action setVisibility (itemId, visibility) {
    this.rows.find(row => row.item.id === itemId).visible = visibility;
    this.addToShopList(itemId, {visibility});
  }
}
