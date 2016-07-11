import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/dateTime/dateTime.html'
})
export class DateTimePage {
  public event= {
    month:"1990-02-19",
    timeStarts:"07:43",
    timeEnds:"1990-02-20"
  }
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
