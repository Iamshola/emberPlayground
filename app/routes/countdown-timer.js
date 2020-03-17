import Route from '@ember/routing/route';
import { action } from '@ember/object';


export default class CountdownTimerRoute extends Route {


  @action
  didTransition() {
    console.log('transition!')

    this.controller.set('hour', 1000 );
  }
}
