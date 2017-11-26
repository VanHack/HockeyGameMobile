import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, LoadingController, Platform, ModalController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import { ModalAlertaPage } from '../modal-alerta/modal-alerta';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

	private apiUrl = '/api';
  	form      : FormGroup;
  	submitted : boolean = false;
  	concorda : boolean = false;
  	usuario   : any;

	constructor(public navCtrl: NavController,
				public toastCtrl    : ToastController,
				public navParams    : NavParams,
				public http: Http,
    			public loadingCtrl  : LoadingController,
    			public modalCtrl: ModalController,
    			private storage: Storage,
    			public platform: Platform) {

		this.usuario = navParams.get('usuario');

		this.form = new FormGroup({
	    	celularCorporativo  : new FormControl('', Validators.required),
	      	dataNascimento      : new FormControl('', Validators.required),
	      	genero              : new FormControl('', Validators.required),
	      	senha               : new FormControl('', Validators.required),
	        confirmarSenha      : new FormControl('', Validators.required)
	    });

		if (this.platform.is('cordova')) {               
            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
        }
	}

	cadastrar(form: FormGroup) {
    	this.submitted = true;

    	if (form.value.senha != form.value.confirmarSenha){
    		let errorMessage = "Passwords are different."
			this.toastCtrl.create({message: errorMessage, duration: 4500}).present();
    		return;
    	}
    	
    	if (this.form.valid) {

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
		        celularCorporativo: form.value.celularCorporativo,
		        dataNascimento: form.value.dataNascimento,
		        genero: form.value.genero,
		        senha: form.value.senha,
		        concorda: this.concorda,
		        type: 'json'
		    }

		    let loading = this.loadingCtrl.create();
		    loading.present();

		    if (this.concorda) {

			    this.http.post(this.apiUrl + "/usuario/cadastro", postParams, options).subscribe(data => {
			    	loading.dismiss();
			        
			        if (data['_body'] != "" && data['_body'] != null){
			        	let usuario = JSON.parse(data['_body']);
			        	
            			this.storage.set('usuario', usuario);
			            this.navCtrl.setRoot(TabsPage);
			            this.modalCtrl.create(ModalAlertaPage,{codigo: 1}).present();  
						
			        }else{
			          	let errorMessage = "Please check the data and try again."
			          	this.toastCtrl.create({message: errorMessage, duration: 4500}).present();
			        }
			        
			    }, error => {
			    	loading.dismiss();
			        console.log('Error: ' + JSON.stringify(error));
			        console.log(error);// Error getting the data
			    });

			}else{
				loading.dismiss();
				let errorMessage = "Please check the data and try again."
				this.toastCtrl.create({message: errorMessage, duration: 4500}).present();
			}


    	}else{
    		let errorMessage = "Fill in the data correctly."
      		this.toastCtrl.create({message: errorMessage, duration: 4500}).present();
    	}
    }

	doBack() {
    	this.navCtrl.pop();
  	}

	onChange(event) {
		if (event.checked) {
			this.concorda = true;
		}else{
			this.concorda = false;
		}
  	}

}
