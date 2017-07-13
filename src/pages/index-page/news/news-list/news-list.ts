import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import {NewsDetail} from '../news-detail/news-detail';
@Component({
    templateUrl: 'news-list.html'
})

export class NewsList{
    
    goToDetail(id) {
        this.nav.push(NewsDetail);
    };
    constructor(public nav: NavController) {
        
    }
}