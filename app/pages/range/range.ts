import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/range/range.html'
})
export class RangePage {
   brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1300;
  structure: any = {lower: 33, upper: 60};
  text: number = 0;
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
