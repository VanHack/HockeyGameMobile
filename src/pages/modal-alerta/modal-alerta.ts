import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-alerta',
  templateUrl: 'modal-alerta.html'
})
export class ModalAlertaPage {
  codigo    : number = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

    this.codigo = navParams.get('codigo');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAlertaPage');
  }

  doBack() {
    this.navCtrl.pop();
  }

}
