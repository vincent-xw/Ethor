import { Component,ViewChild } from '@angular/core';

import {  NavController, Tabs } from 'ionic-angular';

import { IndexPage } from '../index-page/index-page';
import { personalPage } from '../personal/personal';
import { applicationPage } from '../application/application';
// import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('menuTabs') tabRef: Tabs;
  // @Input() isLogin:boolean;
  isLogin = true;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = IndexPage;
  tab2Root: any = applicationPage;
  tab3Root: any = personalPage;
  
  test(){
    console.log(1);
  }
  
  constructor(public nav: NavController) {
    // console.log(this.tabs.select);
  }
  
}
