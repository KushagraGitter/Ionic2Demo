import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {Vibration} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/vibration/vibration.html'
})
export class VibrationPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
  doVibrate(){
    Vibration.vibrate(1000);
  }
}
