import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-dashboard-detalhe',
  templateUrl: 'dashboard-detalhe.html'
})
export class DashboardDetalhePage {
  
  selectedItem: any;
  icons: string[];
  items: Array<{title: string,
                pontos: string, 
                icon: string}>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

    this.selectedItem = navParams.get('item');
  }

  doBack() {
    //this.navCtrl.pop();
    this.navCtrl.setRoot(DashboardPage);
  }
  
}
