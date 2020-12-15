import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CraftablesListComponent extends Component {
  @tracked isInputMode = true;

  get rows () {
    return this.args.craftables;
  }

  @action setAmount (row, amount) {
    row.setAmount(Math.max(amount, 0));
    this.args.onChangeCraftables();
  }

  @action setVisibility (row, visibility) {
    if (visibility) {
      row.show();
    } else {
      row.hide();
    }
    this.args.onChangeCraftables();
  }

  @action toggleMode () {
    this.isInputMode = !this.isInputMode;
  }
}
