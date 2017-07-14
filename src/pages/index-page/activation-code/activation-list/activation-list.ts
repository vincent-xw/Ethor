import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';

// import {NewsDetail} from '../news-detail/news-detail';
@Component({
    templateUrl: 'activation-list.html'
})

export class ActivationList{
    
    goToDetail(id) {
        // this.nav.push(NewsDetail);
    };
    constructor(public nav: NavController) {
        
    }
}