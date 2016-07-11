import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/grid/grid.html'
})
export class GridPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
