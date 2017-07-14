import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'news-detail.html'
})

export class NewsDetail{

  public id:String = "";
  constructor(public navParams: NavParams) {
    this.id = this.navParams.get('id');
    console.log(this.id);
  }
}