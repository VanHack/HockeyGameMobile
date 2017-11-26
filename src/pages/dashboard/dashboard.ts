import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Platform, ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DashboardDetalhePage } from '../dashboard-detalhe/dashboard-detalhe';
import { QuizHistoricoPage } from '../quiz-historico/quiz-historico';
//import {ChartModule} from 'angular2-highcharts';
import { Storage } from '@ionic/storage';

declare var jQuery:any;

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
//styles: [`
//  chart {
//    display: block;
//  }
//`]
	private apiUrl = '/api';
	items: Array<{id: string,
				nome: string,
				data  : string,
                pontos: string}>;
    LIMIT = 6; //length page
    OFFSET = 1; // current
    
    totalPontosPorcentagem : number = 0;
    totalPontos : number = 0;

    headers = new Headers();

	constructor(public navCtrl: NavController, 
              	public navParams: NavParams, 
              	public http: Http,
              	public loadingCtrl  : LoadingController,
              	public toastCtrl    : ToastController,
              	public platform: Platform,
              	private storage: Storage,
              	public modalCtrl: ModalController) {


  	}
  	
  	ionViewDidEnter(){
  		this.storage.get('usuario').then((u) => {
			if (u != null){
	    	  	let postParams = {
					autenticacao: {
				    	usuario: 'game',
				        senha: 'edc2817e979e40b3210dae95c1348fa7'
					},
					idUsuario: u.id,
				 	limit: this.LIMIT,
					offset: this.OFFSET,
			      	type: 'json'
			    }

			   	if (this.platform.is('cordova')) {               
		            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
		        }

			    this.items = [];
			    //this.totalNegocioFechado = 3;

				this.headers.append("Accept", 'application/json');
				this.headers.append('Content-Type', 'application/json' );
			    let options = new RequestOptions({ headers: this.headers });
			 
			    let loading = this.loadingCtrl.create();
			    loading.present();

				this.http.post(this.apiUrl + "/usuario/historico", postParams, options).subscribe(data => {
			        loading.dismiss();
			        
			        if (data['_body'] != "" && data['_body'] != null){
						
						this.totalPontos = JSON.parse(data['_body']).totalPontos;

						this.totalPontosPorcentagem =  this.totalPontos*100/60;

				        this.items = JSON.parse(data['_body']).historicoUsuarios; 

			        }else{
			          let errorMessage = "Try again later..."
			          this.toastCtrl.create({message: errorMessage, duration: 4500}).present();
			        }
			        
			       }, error => {
			        loading.dismiss();
			        console.log('Error: ' + JSON.stringify(error));
			        console.log(error);// Error getting the data
				});
			}
    	});
  	}

    doInfinite(infiniteScroll) {
    	setTimeout(() => {

    		this.storage.get('usuario').then((u) => {
				if (u != null){
					
		    		this.OFFSET++;

				    let options = new RequestOptions({ headers: this.headers });

			    	let postParams = {
						autenticacao: {
					    	usuario: 'game',
					        senha: 'edc2817e979e40b3210dae95c1348fa7'
						},
						idUsuario: u.id,
					 	limit: this.LIMIT,
						offset: this.OFFSET,
				      	type: 'json'
				    }

				    //let loading = this.loadingCtrl.create();
				    //loading.present();

				    this.http.post(this.apiUrl + "/usuario/historico", postParams, options).subscribe(data => {
				        //loading.dismiss();
				        
				        if (data['_body'] != "" && data['_body'] != null){

				          	//this.items = JSON.parse(data['_body']).historicoUsuarios;
				          	let arr = JSON.parse(data['_body']).historico;
				          	
					        if (arr == undefined || arr.length == 0){
					        	let message = "There are no more..."
					        	this.toastCtrl.create({message: message, duration: 2500}).present();
					        	return;
					        }
					        for (let i = 0; i < arr.length; i++) {
					      		this.items.push(arr[i]);
					        }
				          
				        }else{
				          let errorMessage = "Try again later."
				          this.toastCtrl.create({message: errorMessage, duration: 5000}).present();
				        }
				        
				       }, error => {
				       // loading.dismiss();
				        console.log('Error: ' + JSON.stringify(error));
				        console.log(error);// Error getting the data
					});

		      		infiniteScroll.complete();
		      	}
		    });

    	}, 500);
  	}

  	itemTapped(event, item) {
  		console.log(item)
    	if (item.status.id != 6){
			this.navCtrl.setRoot(DashboardDetalhePage,{item: item});
    	}else{
    		this.navCtrl.setRoot(QuizHistoricoPage,{item: item});
    	}
  	}

}
