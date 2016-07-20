import {Component} from '@angular/core';
import {NavController, MenuController,Platform} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/segment/segment.html'
})
export class SegmentPage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(private navController: NavController,menu: MenuController,platform: Platform) {
    menu.enable(true);
    this.isAndroid = platform.is('android');
  }
}
