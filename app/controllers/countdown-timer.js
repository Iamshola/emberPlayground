import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class CountdownTimerController extends Controller {

  @tracked hour = 1000;
  isNotClicked = true;
  isPaused = true;
  timer = null;

  constructor() {
    super(...arguments);
    this.duration = 1000;
  }

  @action
  calculateAmount() {
    this.toggleProperty('isNotClicked');
    this.timer = setInterval(() => {
      this.hour = this.hour - 1
    }, 1000);
  }

  @action
  pause() {
    if (this.isPaused === true) {
      this.toggleProperty('isPaused');
      clearTimeout(this.timer);
      return
    } else {
      this.timer = setInterval(() => {
        this.hour = this.hour - 1
      }, 1000);
      this.toggleProperty('isPaused');
    }

  }
}
