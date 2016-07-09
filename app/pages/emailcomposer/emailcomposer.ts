import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {EmailComposer} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/emailcomposer/emailcomposer.html'
})
export class EmailcomposerPage {
  message;
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);

    EmailComposer.isAvailable().then(
      ()=>{console.log('EmailComposer is available');},
      ()=>{console.log("Email composer isn't available.")}
    )
    EmailComposer.open(
      {
        to:"test@test.com",
        subject: 'Cordova EmailComposer test',
        body: 'How are you? Nice greetings from Leipzig',
        isHtml: true
      }
    ).then(
      ()=>this.message = "Email composer should be open now, if it isn't, then something happened.",
      (error)=> this.message = error
    )
  }
}
