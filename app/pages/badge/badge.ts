import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {Badge} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/badge/badge.html'
})
export class BadgePage {
  badgeValue;
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
    Badge.set(10).then(
      res => this.badgeValue = "updated to 10"
    )
  }
}
