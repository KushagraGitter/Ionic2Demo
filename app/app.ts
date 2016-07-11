import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {HomePage} from './pages/home/home';
import {CardPage} from './pages/card/card';
import {ActionSheetsPage} from './pages/ActionSheets/ActionSheets';
import {AlertPage} from "./pages/alerts/alerts";
import {BadgePage} from './pages/badges/badges';
import {ButtonPage} from './pages/buttons/buttons';
import {AppVersionPage} from './pages/appVersion/appVersion';
import {BarcodePage} from './pages/barcode/barcode';
import {ToastPage} from './pages/toast/toast';
import {VibrationPage} from './pages/vibration/vibration';
import {SpinnerPage} from './pages/spinner/spinner';
import {EmailcomposerPage} from './pages/emailcomposer/emailcomposer';
import {FlashlightPage} from './pages/flashlight/flashlight';
<<<<<<< HEAD
import {ToolbarPage} from './pages/toolbar/toolbar';
=======
import {CheckboxPage} from './pages/checkbox/checkbox';
import {DateTimePage} from './pages/dateTime/dateTime';
import {GesturesPage} from './pages/gestures/gestures';
import {GridPage} from './pages/grid/grid';
import {IconsPage} from './pages/icons/icons';
import {InputPage} from './pages/inputs/inputs';
import {LoadingPage} from './pages/loading/loading';
>>>>>>> 1d9bb4dcc0938046d1767e74f0ffe4c2b66870a6

@Component({
    templateUrl: './build/app.html',
})
export class MyApp {
@ViewChild(Nav) nav: Nav;
    private rootPage:any;

    pages: Array<{title: string, component: any}>;
nativePages: Array<{title: string, component: any}>;
constructor(private platform:Platform, private menu: MenuController ) {

    this.rootPage = HomePage;
<<<<<<< HEAD
     this.pages = [
      { title: 'Action Sheet', component:ActionSheetsPage}, 
      { title: "Card Demo", component: CardPage },
      { title: "My ChatRooms", component: HomePage },
      { title: "Public Chat Rooms", component: TabsPage },
      { title: "Toolbar" , component: ToolbarPage}
    ];     
=======
    this.pages = [
        { title: 'Action Sheet', component:ActionSheetsPage},
        { title: 'Alert', component:AlertPage},
        { title: 'Badges', component:BadgePage},
        { title: 'Buttons', component:ButtonPage},
        { title: "Card Demo", component: CardPage },
        { title: "Check box", component: CheckboxPage},
        { title:  "DateTime", component:DateTimePage},
        { title:  "Gesture Event", component:GesturesPage},
        { title:  "Grid Layout", component:GridPage},
        { title: "Icons",component:IconsPage},
        { title: "Inputs",component:InputPage},
        { title: "Loading",component:LoadingPage},
        { title: "My ChatRooms", component: HomePage },
        { title: "Public Chat Rooms", component: TabsPage }
    ];

>>>>>>> 1d9bb4dcc0938046d1767e74f0ffe4c2b66870a6
    this.nativePages=[
        { title : "App Version", component: AppVersionPage },
        { title : "Badge", component:BadgePage},
        { title : "Barcode", component: BarcodePage},
        { title : "Email Composer", component: EmailcomposerPage},
        { title : "Flash Light", component:FlashlightPage},
        { title : "Toast", component:ToastPage},
        { title : "Spinner Dialog", component:SpinnerPage},
        { title : "Vibration", component:VibrationPage}
    ]
    platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        //StatusBar.overlaysWebView(true);
        StatusBar.backgroundColorByHexString("#F57C00");
        //StatusBar.styleDefault();
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
