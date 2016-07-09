import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {SpinnerDialog} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/spinner/spinner.html'
})
export class SpinnerPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
  showDialog(){
    SpinnerDialog.show('SpinnerDialog',"Native Spinner dialog");
    //SpinnerDialog.hide();
  }
}
