import { Component,Input } from '@angular/core';

import { IndexPage } from '../index-page/index-page';
// import { HelloIonicPage } from '../hello-ionic/hello-ionic';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @Input() isLogin:boolean;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = IndexPage;
  tab2Root: any = IndexPage;
  tab3Root: any = IndexPage;



  constructor() {

    console.log(this.isLogin);
  }
}
