import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/gestures/gestures.html'
})
export class GesturesPage {
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }
}
