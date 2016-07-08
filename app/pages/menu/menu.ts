import {Component} from '@angular/core'
import {App, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MenuPage {
  constructor(app: App, menu: MenuController) {
   menu.enable(true);
  }
}
