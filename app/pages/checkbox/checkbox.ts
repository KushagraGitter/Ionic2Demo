import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/checkbox/checkbox.html'
})
export class CheckboxPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
