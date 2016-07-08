import {Component} from '@angular/core';
import {NavController, MenuController, Platform, ActionSheet} from 'ionic-angular';

@Component({
  templateUrl: `build/pages/ActionSheets/ActionSheets.html`,
  
})
export class ActionSheetsPage {
  constructor(private nav: NavController,menu: MenuController, public platform: Platform) {
    menu.enable(true);
  }
  openMenu(){
    let actionSheet = ActionSheet.create({
      title: 'Albums',
      cssClass:'action-sheets-basic-page',
      buttons:[
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

     this.nav.present(actionSheet);
  }
}
