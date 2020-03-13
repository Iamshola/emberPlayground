import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BasicCalculatorController extends Controller {

  

  @action
  calculate() {
    console.log('hey')
  }


}
