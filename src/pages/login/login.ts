import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, ModalController, Platform, MenuController } from 'ionic-angular'; 
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';
import { CadastroPage } from '../cadastro/cadastro';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private apiUrl = '/api';
  form      : FormGroup;
  submitted : boolean = false;

  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public http: Http,
    public loadingCtrl  : LoadingController,
    public toastCtrl    : ToastController,
    public modalCtrl: ModalController,
    public platform: Platform,
    public menuCtrl: MenuController,
    private storage      : Storage
  ){

    this.form = new FormGroup({
      email     : new FormControl('', Validators.required),
      password  : new FormControl('', Validators.required)
    });
    if (this.platform.is('cordova')) {               
      this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
    }
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewDidLoad() {}

  doLogin(form: FormGroup) {
    this.submitted = true;
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
        emailCorporativo: form.value.email,
        senha: form.value.password,
        type: 'json'
      }

      let loading = this.loadingCtrl.create();
      loading.present();

      this.http.post(this.apiUrl + "/usuario/login", postParams, options).subscribe(data => {
        
        loading.dismiss();
        
        if (data['_body'] != "" && data['_body'] != null){
          let usuario = JSON.parse(data['_body']);
          //if (form.value.lembrar){
            this.storage.set('usuario', usuario);
          //}
          
          if (usuario.dataNascimento == null){
            this.navCtrl.setRoot(CadastroPage,{usuario: usuario});
          }else{
            this.navCtrl.setRoot(TabsPage);            
          }
          
        }else{
          let errorMessage = "You are using the wrong Username or Password."
          this.toastCtrl.create({message: errorMessage, duration: 5000}).present();
        }
        
       }, error => {
        loading.dismiss();
        console.log('Error: ' + JSON.stringify(error));
        console.log(error);// Error getting the data
      });

    } else {
      let errorMessage = "You are using the wrong Username or Password."
      this.toastCtrl.create({message: errorMessage, duration: 5000}).present();
    }
  }

 // private availableEmail(): boolean {
 //   let validEmailDomain = "berkshireschool.org";
 //   return (this.form.value.email.indexOf(validEmailDomain) > -1)
 // }

  doPageSignup() {
  //  this.navCtrl.push(SignupPage);
  }

  doForgotPassword() {
    this.modalCtrl.create(EsqueciSenhaPage).present();  
  }

  doBack() {
    this.navCtrl.pop();
  }
}