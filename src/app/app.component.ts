import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegraPage } from '../pages/regra/regra';
import { PerfilPage } from '../pages/perfil/perfil';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';

export enum ConnectionStatusEnum {
    Online,
    Offline
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any; // = LoginPage; //TabsPage

  //pages: Array<{title: string, component: any}>;
  pages: any;
  private previousStatus;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private storage: Storage,
              private alertCtrl: AlertController,
              private network: Network) {

    storage.get('usuario').then((u) => {
      if (u != null){
        this.nav.setRoot(TabsPage);
      }else{
        this.nav.setRoot(LoginPage);
      }
    });
    
    this.previousStatus = ConnectionStatusEnum.Online;
    //this.initializeApp();

    this.pages = {
      tabsPage : TabsPage,
      perfilPage : PerfilPage,
      regraPage  : RegraPage
    };

    this.network.onDisconnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Online) {
        let alert = this.alertCtrl.create({
        title: "No Internet",
        subTitle:"You are without internet.",
        buttons: [{
          text: 'Ok'
        }]
        });
        alert.present();
      }
      this.previousStatus = ConnectionStatusEnum.Offline;
    });

    this.network.onConnect().subscribe(() => {
        //if (this.previousStatus === ConnectionStatusEnum.Offline) {}
        this.previousStatus = ConnectionStatusEnum.Online;
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  linkRegras(){
    window.open('https://s3.amazonaws.com/hockeygame/rules.pdf', '_system');   
  }

  logout() {
    this.storage.remove('usuario').then(() => {
    });
    this.nav.setRoot(LoginPage);
  }

}
