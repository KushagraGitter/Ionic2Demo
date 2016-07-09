import {Component} from '@angular/core';
import {NavController, MenuController,Platform} from 'ionic-angular';
import {AppVersion} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/appVersion/appVersion.html'
})
export class AppVersionPage {
  
  appName : any = "";
  packageName : any = "";
  versionCode : any  = "";
  versionNumber : any = "";
  constructor(private navController: NavController,menu: MenuController,Platform:Platform) {
    menu.enable(true);
    Platform.ready().then(()=>{
      AppVersion.getAppName().then((data)=>{
          this.appName = data;
       });
      AppVersion.getPackageName().then((data)=>{
           this.packageName  = data;
       });
      AppVersion.getVersionCode().then((data)=>{
         this.versionCode = data;
      });
      AppVersion.getVersionNumber().then((data)=>{
        this.versionNumber  = data;
      });
    })
   
  }

}
