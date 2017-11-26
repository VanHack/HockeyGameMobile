import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, ModalController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ModalAlertaPage } from '../modal-alerta/modal-alerta';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

	private apiUrl = '/api';
	usuario = {
		id: null,
		nome: null,
		celularCorporativo: null,
		dataNascimento: null,
		senha: null,
		confirmarSenha: null,
		genero: null
	}

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

	ionViewDidLoad(){
		this.storage.get('usuario').then((u) => {
			if (u != null) {
				let number = u.dataNascimento;
				let currentDate = new Date(+number);
				currentDate.setHours(currentDate.getHours() - 3);
				this.usuario = {
			      id: u.id,
			      nome: u.nome,
			      celularCorporativo: u.celularCorporativo,
			      dataNascimento: currentDate.toISOString(),
			      senha: u.senha,
			      confirmarSenha: u.confirmarSenha,
			      genero: u.genero
			    }		
			}
		});	
	}

	onSubmit() {

		if (this.usuario.senha != this.usuario.confirmarSenha){
    		let errorMessage = "Passwords are different."
			this.toastCtrl.create({message: errorMessage, duration: 4500}).present();
    		return;
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
	      id: this.usuario.id,
	      celularCorporativo: this.usuario.celularCorporativo,
	      dataNascimento: this.usuario.dataNascimento,
	      senha: this.usuario.senha,
	      genero: this.usuario.genero,
	      type: 'json'
	    }

	    let loading = this.loadingCtrl.create();
	    loading.present();

		this.http.post(this.apiUrl + "/usuario/perfil", postParams, options).subscribe(data => {   
			loading.dismiss();

			if (data['_body'] != "" && data['_body'] != null){
				let usuario = JSON.parse(data['_body']);
            	this.storage.set('usuario', usuario);
            	this.modalCtrl.create(ModalAlertaPage,{codigo: 6}).present();
            	this.doBack();
            } else {
            	this.toastCtrl.create({message: "Try again later...", duration: 4500}).present();
            } 
	        
	       }, error => {
	        loading.dismiss();
	        this.toastCtrl.create({message: "Try again later...", duration: 4500}).present();
	    });

  	}

  	doBack() {
    	this.navCtrl.setRoot(TabsPage);
  	}

}
