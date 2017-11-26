import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html'
})
export class RankingPage {
  
  private apiUrl = '/api';
  selectedItem: any;
  icons: string[];
  items: Array<{title: string,
                pontos: string, 
                icon: string}>;
  minhaPosicao : number = 0;
  meusPontos : number = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http: Http,
              public loadingCtrl: LoadingController,
              private storage: Storage,
              public toastCtrl: ToastController,
              private platform: Platform) {
    
    this.selectedItem = navParams.get('item');

    if (this.platform.is('cordova')) {               
      this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
    }

    this.items = [];

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

        this.http.post(this.apiUrl + "/usuario/ranking", postParams, options).subscribe(data => {   
            
          loading.dismiss();
            
          if (data['_body'] != "" && data['_body'] != null){

              this.items = JSON.parse(data['_body']).usuarios;
              this.minhaPosicao = JSON.parse(data['_body']).minhaPosicao;
              this.meusPontos = JSON.parse(data['_body']).meusPontos;
              //console.log(JSON.parse(data['_body']).usuario);

          }else{
            let errorMessage = "Try again later..."
            this.toastCtrl.create({message: errorMessage, duration: 4500}).present();
          }
            
        }, error => {
          loading.dismiss();
          this.toastCtrl.create({message: "Try again later...", duration: 4500}).present();
        });
      }

    });


  }

}
