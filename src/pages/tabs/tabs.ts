import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ModalController, Platform } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { QuizPage } from '../quiz/quiz';
import { RankingPage } from '../ranking/ranking';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';



@Component({
	selector: 'page-tabs',
  	templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab3Root = QuizPage;
  tab5Root = RankingPage;

  private apiUrl = '/api';
  quizDisponivel : number = null;

  constructor(private storage: Storage,
              public http: Http, 
              public loadingCtrl: LoadingController, 
              public toastCtrl: ToastController,
              public platform: Platform) {

    if (this.platform.is('cordova')) {               
      this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
    }

    storage.get('usuario').then((u) => {
      if (u != null) {
          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json' );
          let options = new RequestOptions({ headers: headers });
       
          let postParams = {
            autenticacao: {
              usuario: 'game',
              senha: 'edc2817e979e40b3210dae95c1348fa7'
            },
            idUsuario: u.id,
            type: 'json'
          }

          let loading = this.loadingCtrl.create();
          loading.present();

          this.http.post(this.apiUrl + "/quiz/disponivel", postParams, options).subscribe(data => {
              loading.dismiss();
              
              if (data['_body'] != "" && data['_body'] != null){
                  console.log("quiz", JSON.parse(data['_body']))
                  if (JSON.parse(data['_body'])){ //respondido?
                    this.quizDisponivel = 1;
                  }else{
                    this.quizDisponivel = null;
                  }
              }
              
             }, error => {
              loading.dismiss();
              this.toastCtrl.create({message: "Try again later.", duration: 4500}).present();
          });
      }
    });
  }

  removeTabBadge(){
    this.quizDisponivel = null;
  }


}
