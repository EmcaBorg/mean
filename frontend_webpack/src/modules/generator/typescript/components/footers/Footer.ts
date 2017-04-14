import {Component, OnInit} from '@angular/core';
import {RestService} from "../../../../core/typescript/services/RestService";


@Component({
    selector: 'footer',
    templateUrl: '../../../templates/footers/footer.html'
})
export class FooterComponent implements OnInit {

    constructor(public restService: RestService) {
    }


    ngOnInit(): void {

    }
}
