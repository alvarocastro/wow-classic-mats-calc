import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CraftablesListRowComponent extends Component {
  get tabindex () {
    return this.args.index + 1;
  }

  get isHidden () {
    return this.args.input && !this.args.visible;
  }

  @action handleInput (event) {
    const amount = Number(event.target.value);

    this.args.onInputAmount(this.args.item.id, amount);
  }

  @action hide () {
    this.args.onChangeVisibility(this.args.item.id, false);
  }

  @action show () {
    this.args.onChangeVisibility(this.args.item.id, true);
  }
}
