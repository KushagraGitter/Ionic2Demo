import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/barcode/barcode.html'
})
export class BarcodePage {
  scanerData;
  scanerFormat;
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);

    BarcodeScanner.scan().then(
      barcodeData => this.scanerData = barcodeData.text
    );
  }
}
