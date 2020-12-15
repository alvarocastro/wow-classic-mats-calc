import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AlertComponent extends Component {
  get isDismissable () {
    return Boolean(this.args.onDismiss);
  }

  get typeClass () {
    return this.args.type ?? 'secondary';
  }

  get isVisible () {
    if (this.isDismissable) {
      return this.args.visible;
    }
    return true;
  }
}
