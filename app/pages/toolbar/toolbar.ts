import {Component} from '@angular/core';
import {NavController, MenuController,Platform} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/toolbar/toolbar.html'
})
export class ToolbarPage {
  isAndroid: boolean = false;
  constructor(private navController: NavController,menu: MenuController,platform:Platform) {
    menu.enable(true);
    this.isAndroid = platform.is('android');
  }
  ionViewWillEnter() {
    console.log('enter');
    document.getElementById('md-tabs-icon-text').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }

  ionViewWillLeave() {
    document.getElementById('md-tabs-icon-text').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }
}
