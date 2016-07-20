import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {
  Control,
  ControlGroup,
  NgForm,
  Validators,
  ControlValueAccessor,
  NgControlName,
  NgFormModel,
  FormBuilder
} from '@angular/common';

@Component({
  templateUrl: 'build/pages/radio/radio.html'
})
export class RadioPage {
  langs;
  langForm;
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
    this.langs = new Control("");
    this.langForm = new ControlGroup({
      "langs" : this.langs
    });
  }
  doSubmit(event){
     console.log('Submitting form', this.langForm.value);
     event.preventDefault();
  }
}
