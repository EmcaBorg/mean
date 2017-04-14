import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from "../../../../core/typescript/services/RestService";
import {ISidebarUser, ISidebarElement} from "../../abstract/ISidebars";
import {Commands, IEmitter} from "../../../../core/typescript/config/Commands";
import {Subscription} from 'rxjs';
import {EmitterService} from "../../../../core/typescript/services/EmitterService";

@Component({
    selector: 'user-sidebar',
    templateUrl: '../../../templates/sidebars/user-sidebar.html'
})
export class UserSidebarComponent implements OnInit {

    private updateListener: Subscription;
    private sidebarUser: ISidebarUser = {
        overview: {url: '/users/overview', name: 'Overview', active: false},
        myTherapyPlan: {url: '/users/therapy-plan', name: 'My Therapy Plan', active: false, showNotify: false},
        myMealPlan: {url: '/users/meal-plan', name: 'My Meal Plan', active: false},
        myClinic: {url: '/users/clinics/my-clinic', name: 'My Clinic', active: false},
        myQuestionnaires: {url: '/users/questionnaires/all', name: 'My Questionnaire', active: false},
        settings: {url: '/settings', name: 'Settings', active: false},
        help: {url: '/help', name: 'Help', active: false}
    };


    constructor(private restService: RestService, private router: Router, private emitterService: EmitterService) {}

    public sidebarElementEventListener(element: ISidebarElement){
        Object.keys(this.sidebarUser).forEach((key)=> {
            element.name !== this.sidebarUser[key].name ? this.sidebarUser[key].active = false : this.sidebarUser[key].active = true;
            if(this.sidebarUser[key].hasOwnProperty('showNotify')){
               this.sidebarUser[key].showNotify = false;
            }
        });
        this.router.navigate([element.url]);
    }


    ngOnInit(): void {
        this.updateListener = this.emitterService.emitter.subscribe((subject: IEmitter)=>{
            if(subject.command === Commands.PATIENT_UPDATE){
                this.sidebarUser.myTherapyPlan.showNotify = true;
            }
        });
    }

}
