import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import craftables from 'wow-classic-mats-calc/data/craftables';
import mats from 'wow-classic-mats-calc/data/mats';

class Row {
  @tracked amount;

  constructor (data) {
    this.amount = data.amount;
    this.item = data.item;
  }
}

export default class MatsListComponent extends Component {
  get rows () {
    const shopList = this.args.shopList ?? [];
    let neededMats = [];

    // For each craftable item
    for (const shopOrder of shopList) {
      // Skip hidden orders
      if (!shopOrder.visible) {
        continue;
      }
      const item = craftables.find(({id}) => id === shopOrder.id);

      // Loop each mat required to craft it
      for (const {id, amount} of item.mats) {
        // Look it up in the needed mats list
        const mat = neededMats.find((mat) => mat.id === id);

        // And if it's already on the list, add the amount, or add it to the list
        if (mat) {
          mat.amount += amount * shopOrder.amount;
        } else {
          neededMats.push({
            id,
            amount: amount * shopOrder.amount
          });
        }
      }
    }

    // Keep only mats with an amount > 0
    neededMats = neededMats.filter((mat) => mat.amount > 0);

    // Hydrate the list with complete mat data
    return neededMats
      .map(({id, amount}) => {
        return new Row({
          item: mats.find(mat => mat.id === id),
          amount: amount
        });
      })
      .sort(({item: itemA}, {item: itemB}) => {
        const a = `${itemA.source}_${itemA.name}`;
        const b = `${itemB.source}_${itemB.name}`;

        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        }
        return 0;
      });
  }
}
