import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import store from 'store2';

export default class CalcComponent extends Component {
  @tracked isInputMode = true;
  @tracked shopList = store.get('shopList') ?? [];

  @tracked isWelcomeMessageVisible = store.get('welcomeMessage') ?? true;
  @tracked isHeadsUpMessageVisible = store.get('headsUpMessage') ?? false;

  @action handleShopListChange (shopList) {
    this.shopList = shopList;
    store.set('shopList', shopList);
  }

  @action toggleMode () {
    this.isInputMode = !this.isInputMode;
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
}
