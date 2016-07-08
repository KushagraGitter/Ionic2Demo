import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/alerts/alerts.html'
})
export class AlertPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
