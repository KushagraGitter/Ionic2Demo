import {Component} from '@angular/core';
import {NavController, MenuController,Loading} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/loading/loading.html'
})
export class LoadingPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
  startLoading(){
    let loading = Loading.create({
      content:"please wait... ",
      duration:1000,
      dismissOnPageChange:true
    });
    this.navController.present(loading);
  }
}
