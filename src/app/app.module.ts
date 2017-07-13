import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { applicationPage } from '../pages/application/application';
import { personalPage } from '../pages/personal/personal';
import { IndexPage } from '../pages/index-page/index-page';
import { NewsList } from '../pages/index-page/news/news-list/news-list';
import { NewsDetail } from '../pages/index-page/news/news-detail/news-detail';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    applicationPage,
    personalPage,
    IndexPage,
    TabsPage,
    NewsList,
    NewsDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    applicationPage,
    personalPage,
    IndexPage,
    TabsPage,
    NewsList,
    NewsDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
