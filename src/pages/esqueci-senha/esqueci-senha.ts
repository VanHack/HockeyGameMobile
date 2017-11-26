import { Component } from '@angular/core';
//import { EmailComposer } from 'ionic-native';
import { Http, Headers, RequestOptions } from '@angular/http';

import { NavController, 
         NavParams, 
         ToastController, 
         LoadingController,
         AlertController,
         Platform } from 'ionic-angular';
import { 
  FormGroup, 
  FormControl, 
  Validators } from '@angular/forms';

//import { UserProvider } from '../../providers/user';


@Component({
  selector: 'esqueci-senha',
  templateUrl: 'esqueci-senha.html'
})
export class EsqueciSenhaPage {
  
  private apiUrl = '/api';
  form      : FormGroup;
  submitted : boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //public userProvider: UserProvider,
    public http: Http,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public platform: Platform
  ) {

    if (this.platform.is('cordova')) {               
      this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
    }

    this.form = new FormGroup({
      email     : new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqueciSenhaPage');
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    
    this.alertCtrl.create({
              title: 'Password sent',
              subTitle: 'Check your email. If you have not received it, check SPAM.',
              buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.doPageLogin();
                }
              },
            ]
          }).present();
  }

  doPageLogin() {
    this.navCtrl.pop();
  }

  doEmailUs() {
    if(!this.platform.is('cordova')) {
      this.toastCtrl.create({
        message:'You can\'t open Email composer. You can only open this on mobile devices',
        duration:4500}
      ).present()
      return;
    }
    //console.log("open email box");
    //EmailComposer.isAvailable().then((available: boolean) =>{
    //  if(available) {
    //  //  //Now we know we can send
    //  }
    //});

    //let email = {
    //  to: 'max@mustermann.de',
    //  subject: 'There is a issue to login on BearsFeed iOS app',
    //  body: 'I can\'t login to app.',
    //  isHtml: true
    //};

    // Send a text message using default options
    //EmailComposer.open(email);
  }

}
