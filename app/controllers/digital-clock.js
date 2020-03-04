import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class DigitalClockController extends Controller {

  @tracked hour = new Date().getHours() + ':';
  @tracked min = new Date().getMinutes() + ':';
  @tracked sec = new Date().getSeconds() <= 9 ? '0' + new Date().getSeconds() : new Date().getSeconds();


  constructor() {
    super(...arguments);
    this.duration = 1000;
  
  setInterval(() => {
    this.hour = new Date().getHours() + ':';
    this.min = new Date().getMinutes() + ':';
    this.sec = new Date().getSeconds() <= 9 ? '0' + new Date().getSeconds() : new Date().getSeconds();
  }, 1000);
}


  // setInterval(getTime, duration)


}



