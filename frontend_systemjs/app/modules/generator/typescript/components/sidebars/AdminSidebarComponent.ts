import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {RestService} from "../../../../core/typescript/services/RestService";
import {ISidebarAdmin, ISidebarElement} from "../../abstract/ISidebars";
import {RoleService} from "../../../../core/typescript/services/RoleService";
import {Modules, Permissions} from "../../../../core/typescript/config/RolesConfig";
import {SessionService} from "../../../../core/typescript/services/SessionService";
import {EmitterService} from "../../../../core/typescript/services/EmitterService";
import {IEmitter, Commands} from "../../../../core/typescript/config/Commands";

@Component({
    selector: 'admin-sidebar',
    templateUrl: '../../../templates/sidebars/admin-sidebar.html'
})
export class AdminSidebarComponent implements OnInit {


    private reloadViews: Subscription;
    private sidebarAdmin: ISidebarAdmin = {
        patients: {url: '/admins/operations/all-patients', name: 'Patients', active: false},
        admins: {url: '/admins/operations/all-admins', name: 'Admins', active: false},
        mealPlan: {url: '/admins/meal-admin', name: 'Meal Plan', active: false},
        questionnaires: {url: '/admins/questionnaires/(all//workflow:questionnaire-workflow)', name: 'Questionnaires', active: false},
        clinics: {url: '/admins/clinics/search', name: 'Clinics', active: false},
        checklist: {url: '/admins/checklist', name: 'Checklist', active: false},
        settings: {url: '/admins/settings', name: 'Settings', active: false}
    };
    private modules: Modules = Modules;
    private permissions: Permissions = Permissions;
    private display: boolean = false;

    constructor(private restService: RestService, private sessionService: SessionService, private roleService: RoleService, private emitterService: EmitterService, private router: Router) {}

    public sidebarElementEventListener(element: ISidebarElement){
        Object.keys(this.sidebarAdmin).forEach((key)=> {
            element.name !== this.sidebarAdmin[key].name ? this.sidebarAdmin[key].active = false : this.sidebarAdmin[key].active = true;
        });

        element.name === 'Questionnaires' ? this.router.navigateByUrl(element.url): this.router.navigate([element.url]);
    }


    ngOnInit(): void {
        this.reloadViews = this.emitterService.emitter.subscribe((subject: IEmitter)=>{
            if(subject.command === Commands.RELOAD_VIEWS){
               this.display = !this.display;
               this.display = !this.display;
            }
        });
        this.display = !this.display;

    }
}
