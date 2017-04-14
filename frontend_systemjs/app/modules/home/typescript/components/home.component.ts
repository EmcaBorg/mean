import { Component } from '@angular/core';
import {RestService} from "../../../core/typescript/services/rest.service.ts";

@Component({
    selector: 'home',
    templateUrl: '../../templates/home.html'
})
export class HomeComponent {

  constructor(public restService: RestService){

  }

}
