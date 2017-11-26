import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ModalController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ModalAlertaPage } from '../modal-alerta/modal-alerta';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html'
})
export class QuizPage {

	private apiUrl = '/api';
	quiz = {
		id : null
	};
	answers = [];

  	constructor(public navCtrl: NavController, 
  				public http: Http, 
  				public loadingCtrl: LoadingController, 
  				public toastCtrl: ToastController,
        		public modalCtrl: ModalController,
        		private storage: Storage,
        		private platform: Platform) {

  		if (this.platform.is('cordova')) {               
        	this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
      	}

	}

	ionViewDidEnter(){
		this.refresh();		
	}

	refresh() {
		this.storage.get('usuario').then((u) => {
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

			    this.http.post(this.apiUrl + "/quiz/listar", postParams, options).subscribe(data => {
			        loading.dismiss();

			        
			        if (data['_body'] != "" && data['_body'] != null){
			          	this.quiz = JSON.parse(data['_body']);
			          	
			        } else {
			        	this.quiz = null;
		          		this.toastCtrl.create({message: "Wait for the next question...", duration: 3000}).present();	
			        }
			        
			       }, error => {
			        loading.dismiss();
			        this.toastCtrl.create({message: "Try again later...", duration: 4500}).present();
			    });
			}
		});
	}

  	onSubmit() {
		if (this.answers.length > 0) {
			this.storage.get('usuario').then((u) => {
				if (u != null) {
			    	let postParams = {
						autenticacao: {
					    	usuario: 'game',
					        senha: 'edc2817e979e40b3210dae95c1348fa7'
						},
						idUsuario: u.id,
					 	opcaoEscolhida: this.answers,
						idQuiz: this.quiz.id,
				      	type: 'json'
				    }

			    	var headers = new Headers();
				    headers.append("Accept", 'application/json');
				    headers.append('Content-Type', 'application/json' );
				    let options = new RequestOptions({ headers: headers });

				    let loading = this.loadingCtrl.create();
				    loading.present();

			      	this.http.post(this.apiUrl + "/quiz/responder", postParams, options).subscribe(data => {
				        loading.dismiss();

				        let resp = JSON.parse(data['_body']);

			            if (resp.codigo == 1){
			            	this.modalCtrl.create(ModalAlertaPage,{codigo: 4}).present();
			            } else if (resp.codigo == 2) {
			            	this.modalCtrl.create(ModalAlertaPage,{codigo: 5}).present();
			            } else{
			            	this.toastCtrl.create({message: resp.mensagem, duration: 4500}).present();
			            }
			            this.navCtrl.setRoot(QuizPage);

			       	}, error => {
				        loading.dismiss();
				        console.log('Error: ' + JSON.stringify(error));
				        console.log(error);// Error getting the data
			      	});
		    	} else {
			    	this.toastCtrl.create({message: "Try agan later.", duration: 4500}).present();
			    }
		    });
		} else {
	    	this.toastCtrl.create({message: "Choose one answer.", duration: 3000}).present();
		}
	}

    onChange(value, event) {
	    if (event.checked) {
			this.answers.push(value)
	    } else {
			const index: number = this.answers.indexOf(value);
		    if (index !== -1) {
		        this.answers.splice(index, 1);
		    }  
	    }
	    console.log(this.answers)
	}

	
}
