import {Component} from '@angular/core';
import {NavController, MenuController, Alert} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/alerts/alerts.html'
})
export class AlertPage {
    testRadioOpen: boolean;
    testRadioResult;
    testCheckboxOpen: boolean;
    testCheckboxResult;

    constructor(private nav: NavController,menu: MenuController) {
        menu.enable(true);
    }

    doAlert(){
        let alert = Alert.create({
            title : "basic alert",
            message:"press ok to confirm",
            buttons: ['OK']
        });
        this.nav.present(alert);
    }

    doPrompt(){
        let prompt = Alert.create({
            title: 'Prompt Alert',
            message: 'Enter name to be displayed',
            inputs:[
                {
                    name: 'name',
                    placeholder: 'Name'
                }
            ],
            buttons:[
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        this.nav.present(prompt);
    }

    doConfirm(){
        let confirm = Alert.create({
            title: 'Confirm Alert',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        this.nav.present(confirm);
    }

    doRadio(){
        let radio = Alert.create();

        radio.setTitle('Radio Alert');

        radio.addInput({
            type:'radio',
            label:'Blue',
            value:'blue',
            checked: true
        });
        radio.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });

        radio.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });

        radio.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });

        radio.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });

        radio.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });

        radio.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });

        radio.addButton('cancle');

        radio.addButton({
            text: 'OK',
            handler: data=>{
                console.log('radiodata  ', data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });

        this.nav.present(radio).then(() => {
            this.testRadioOpen = true;
        });


    }

    doCheckbox(){
        let alert = Alert.create();
        alert.setTitle('Checkbox Alert');

        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Coruscant',
            value: 'value3'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Endor',
            value: 'value4'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Hoth',
            value: 'value5'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Jakku',
            value: 'value6'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Naboo',
            value: 'value6'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Takodana',
            value: 'value6'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Tatooine',
            value: 'value6'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }
        });

        this.nav.present(alert).then(() => {
            this.testCheckboxOpen = true;
        });
    }
}
