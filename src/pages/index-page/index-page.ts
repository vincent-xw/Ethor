import { Component,ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

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
  private slidesArray = [
        {"img":"./img/slide1.jpeg"},
        {"img":"./img/slide2.jpeg"},
        {"img":"./img/slide3.jpeg"},
        {"img":"./img/slide4.jpeg"}
    ];
  private panel = {
    "news":true,
    "data":false
  };

  switchPanel(str){
    if(str == "news"){
      this.panel.news = true;
      this.panel.data = false;
    }else{
      this.panel.news = false;
      this.panel.data = true;
    }
  }
  constructor() {
     
  }
}