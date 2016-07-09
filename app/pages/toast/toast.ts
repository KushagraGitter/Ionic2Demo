import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {Toast} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/toast/toast.html'
})
export class ToastPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
   
  }
   showToast(){
    Toast.show("I'm a toast", "5000", "center").subscribe(
      toast => {
        console.log(toast);
      }
    );
   }
}
