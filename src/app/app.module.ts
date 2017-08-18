import { Geolocation } from '@ionic-native/geolocation';
import { MapsPage } from './../pages/maps/maps';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TimelinePage } from '../pages/timeline/timeline';
import { ContactPage } from '../pages/contact/contact';
import { NavigationPage } from '../pages/navigation/navigation';
import { PostAddPage } from "../pages/post-add/post-add";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';

@NgModule({
  declarations: [
    MyApp,
    TimelinePage,
    ContactPage,
    NavigationPage,
    PostAddPage,
    TabsPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TimelinePage,
    ContactPage,
    NavigationPage,
    TabsPage,
    PostAddPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    ConnectivityProvider
  ]
})
export class AppModule {}
