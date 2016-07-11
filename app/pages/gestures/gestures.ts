import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/gestures/gestures.html'
})
export class GesturesPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
