import { Component,ViewChild } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import { NewsList } from './news/news-list/news-list';
import { ActivationList } from './activation-code/activation-list/activation-list';
import { Salary } from './salary/salary';

@Component({
    selector: 'index-page',
    templateUrl: 'index-page.html'
})


export class IndexPage{
  
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  
  autoPlay(){
    this.slides.startAutoplay();
  }
  slidesArray = [
        {"img":"./img/slide1.jpeg"},
        {"img":"./img/slide2.jpeg"},
        {"img":"./img/slide3.jpeg"},
        {"img":"./img/slide4.jpeg"}
    ];
  isLogin = true;
  panel = {
    "news":true,
    "data":false
  };
  panel2 = {
    "notice":true,
    "toBeDone":false
  };
  switchPanel(str,panelId){
    if(panelId == 1){
      if(str == "news"){
        this.panel.news = true;
        this.panel.data = false;
      }else{
        this.panel.news = false;
        this.panel.data = true;
      }
    }else{
      if(str == "notice"){
        this.panel2.notice = true;
        this.panel2.toBeDone = false;
      }else{
        this.panel2.notice = false;
        this.panel2.toBeDone = true;
      }
    }
    
  }
  goToOtherPage(str) {
      if(str == "newsList"){
        this.nav.push(NewsList);
      }else if(str == "activationCode"){
        this.nav.push(ActivationList);
      }else{
        this.nav.push(Salary);
      }
  };
  constructor(public nav: NavController) {

     

  }
}