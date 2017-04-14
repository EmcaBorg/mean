import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {RestService} from "../../../../core/typescript/services/RestService";
import {ISidebarElement, ISidebarAcuteAdmin} from "../../abstract/ISidebars";
import {RoleService} from "../../../../core/typescript/services/RoleService";
import {Modules, Permissions} from "../../../../core/typescript/config/RolesConfig";
import {SessionService} from "../../../../core/typescript/services/SessionService";
import {EmitterService} from "../../../../core/typescript/services/EmitterService";
import {IEmitter, Commands} from "../../../../core/typescript/config/Commands";

@Component({
    selector: 'acute-admin-sidebar',
    templateUrl: '../../../templates/sidebars/acute-admin-sidebar.html'
})
export class AcuteAdminSidebarComponent implements OnInit {


    private reloadViews: Subscription;
    private sidebarAdmin: ISidebarAcuteAdmin = {
        professionals: {url: '/acute/admin/professionals', name: 'Professionals', active: false},

    };
    private modules: Modules = Modules;
    private permissions: Permissions = Permissions;
    private display: boolean = false;

    constructor(private restService: RestService, private sessionService: SessionService, private roleService: RoleService, private emitterService: EmitterService, private router: Router) {}

    public sidebarElementEventListener(element: ISidebarElement){
        Object.keys(this.sidebarAdmin).forEach((key)=> {
            element.name !== this.sidebarAdmin[key].name ? this.sidebarAdmin[key].active = false : this.sidebarAdmin[key].active = true;
        });
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
