import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatosPersonalesPage } from '../pages/datos-personales/datos-personales';
//import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
   HomePage,
    //ListPage
    TabsPage,
    UbicacionPage,
    DatosPersonalesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage
    TabsPage,
    UbicacionPage,
    DatosPersonalesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
