import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/badges/badges.html'
})
export class BadgePage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
