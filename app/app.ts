import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {MenuPage} from './pages/menu/menu';
import {HomePage} from './pages/home/home';
import {CardPage} from './pages/card/card';
import {ActionSheetsPage} from './pages/ActionSheets/ActionSheets';


@Component({
  templateUrl: './build/app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  private rootPage:any; 
pages: Array<{title: string, component: any}>;
  constructor(private platform:Platform, private menu: MenuController ) {
    this.rootPage = HomePage;
     this.pages = [
      { title: "My ChatRooms", component: HomePage },
      { title: "Public Chat Rooms", component: TabsPage },
      { title: "Card Demo", component: CardPage },
      {title: 'Action Sheet', component:ActionSheetsPage}           
    ];     
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

   openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp)
