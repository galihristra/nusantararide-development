import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NusantarideApp } from './app.component';

import { TimelinePage } from '../pages/timeline/timeline';
import { ContactPage } from '../pages/contact/contact';
import { NavigationPage } from '../pages/navigation/navigation';
import { PostAddPage } from "../pages/post-add/post-add";
import { TabsPage } from '../pages/tabs/tabs';
import { MapsPage } from './../pages/maps/maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";
import { FilePath } from "@ionic-native/file-path";
import { Transfer } from "@ionic-native/transfer"; 

import { ConnectivityProvider } from '../providers/connectivity/connectivity';

@NgModule({
  declarations: [
    NusantarideApp,
    TimelinePage,
    ContactPage,
    NavigationPage,
    PostAddPage,
    TabsPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(NusantarideApp, {
      tabsPlacement: 'top',
      tabsLayout: 'title-hide'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NusantarideApp,
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
    ConnectivityProvider,
    File,
    Camera,
    FilePath,
    Transfer
  ]
})
export class AppModule {}
