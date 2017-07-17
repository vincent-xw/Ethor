import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';

import {ActivationPage} from '../activation-page/activation-page';
@Component({
    templateUrl: 'activation-list.html'
})

export class ActivationList{
    
    goToDetail(id) {
        // this.nav.push(NewsDetail);
    };
    private panel1 = true;
    private panel2 = false;
    private panel3 = false;
    switchPanel(id){
        this.panel1 = false;
        this.panel2 = false;
        this.panel3 = false;
        if(id == 1){
            this.panel1 = true;
        }else if(id ==2){
            this.panel2 = true;
        }else{
            this.panel3 = true;
        }
    }

    applyCode() {
        
        this.nav.push(ActivationPage);
        
    };
    constructor(public nav: NavController) {
        
    }

    
}