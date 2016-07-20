import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/buttons/buttons.html'
})
export class ButtonPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
