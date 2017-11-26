import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DashboardDetalhePage } from '../pages/dashboard-detalhe/dashboard-detalhe';
import { RegraPage } from '../pages/regra/regra';
import { PerfilPage } from '../pages/perfil/perfil';
import { RankingPage } from '../pages/ranking/ranking';
import { QuizPage } from '../pages/quiz/quiz';
import { QuizHistoricoPage } from '../pages/quiz-historico/quiz-historico';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import { ModalAlertaPage } from '../pages/modal-alerta/modal-alerta';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

import {ChartModule} from 'angular2-highcharts';

import { GoogleMaps } from '@ionic-native/google-maps';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

import { IonicStorageModule } from '@ionic/storage'
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    DashboardDetalhePage,
    RegraPage,
    PerfilPage,
    RankingPage,
    QuizPage,
    QuizHistoricoPage,
    CadastroPage,
    EsqueciSenhaPage,
    ModalAlertaPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ChartModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    DashboardDetalhePage,
    RegraPage,
    PerfilPage,
    RankingPage,
    QuizPage,
    QuizHistoricoPage,
    CadastroPage,
    EsqueciSenhaPage,
    ModalAlertaPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    GoogleMaps,
    NativeGeocoder,
    LocationAccuracy,
    Network
  ]
})
export class AppModule {}
