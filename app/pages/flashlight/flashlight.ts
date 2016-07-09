import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {Flashlight} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/flashlight/flashlight.html'
})
export class FlashlightPage {
  flashAvailable;
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
    Flashlight.available().then(
      ()=> this.flashAvailable = true,
      ()=> this.flashAvailable = false
    )
  }
  switchOn(){
    if(this.flashAvailable){
      Flashlight.switchOn();
    }
  }
 switchOff(){
   if(this.flashAvailable){
      Flashlight.switchOff();
    }
 }
}
