import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {NewsDetail} from '../news-detail/news-detail';
import {News} from "../news";
@Component({
    templateUrl: 'news-list.html'
})

export class NewsList{
    news: News[];
    goToDetail(id) {
        this.nav.push(NewsDetail,{
            id:id
        });
    };

    private heroesUrl = '/json/test.json';
    getHeroes(): Promise<News[]> {
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => {
                    response.json().data as News[];
                    this.news = response.json().data;
                })
                .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(public nav: NavController,private http: Http) {
        this.getHeroes();
        
    }
}