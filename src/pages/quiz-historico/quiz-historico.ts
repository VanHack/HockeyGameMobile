import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, ModalController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ModalAlertaPage } from '../modal-alerta/modal-alerta';
import { Storage } from '@ionic/storage';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-quiz-historico',
  templateUrl: 'quiz-historico.html'
})
export class QuizHistoricoPage {

	private apiUrl = '/api';
	quiz = {
		id : null
	};
	answers = [];
	selectedItem: any;

  	constructor(public navCtrl: NavController, 
  				public http: Http, 
  				public loadingCtrl: LoadingController, 
  				public toastCtrl: ToastController,
        		public modalCtrl: ModalController,
        		private storage: Storage,
        		public navParams: NavParams,
        		private platform: Platform) {

  		this.selectedItem = navParams.get('item');

  		if (this.platform.is('cordova')) {               
        	this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
      	}

	    var headers = new Headers();
	    headers.append("Accept", 'application/json');
	    headers.append('Content-Type', 'application/json' );
	    let options = new RequestOptions({ headers: headers });
	 
	    let postParams = {
	      autenticacao: {
	        usuario: 'game',
	        senha: 'edc2817e979e40b3210dae95c1348fa7'
	      },
	      idHistoricoUsuario: this.selectedItem.id,
	      type: 'json'
	    }

	    let loading = this.loadingCtrl.create();
	    loading.present();

	    this.http.post(this.apiUrl + "/quiz/resposta", postParams, options).subscribe(data => {
	        loading.dismiss();
	        
	        if (data['_body'] != "" && data['_body'] != null){
	          	this.quiz = JSON.parse(data['_body']);
	          	console.log(JSON.parse(data['_body']))
	        } else {
	        	this.quiz = null;
          		this.toastCtrl.create({message: "Try again later...", duration: 3000}).present();	
	        }
	        
	       }, error => {
	        loading.dismiss();
	        this.toastCtrl.create({message: "Try again later...", duration: 4500}).present();
	    });

	}

	doBack() {
    	this.navCtrl.setRoot(DashboardPage);
  	}

	
}
