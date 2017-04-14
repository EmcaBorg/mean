import {Component, OnInit} from '@angular/core';
import {RestService} from "../../../core/typescript/services/RestService";
import {NotificationsService} from "../../../common/typescript/services/notification/notifications.service";
import {ScreenDetectionService} from "../../../core/typescript/services/ScreenDetectionService";
import {ScreenTypes} from "../../../core/typescript/config/ScreenTypes";
import {SessionService} from "../../../core/typescript/services/SessionService";
import {SessionConfig} from "../../../core/typescript/config/SessionConfig";
import {TranslateService} from "../../../../translations/TranslateService";
import {TransporterService} from "../../../core/typescript/services/TransporterService";
import {SocketIOClient, SocketIOClientStatic} from "socket.io-client";
import {SocketConfig} from "../../../core/typescript/config/SocketConfig";
import {EmitterService} from "../../../core/typescript/services/EmitterService";
import {Commands} from "../../../core/typescript/config/Commands";
import {ClinicsService} from "../../../clinics/typescript/services/ClinicsService";
declare var io: SocketIOClientStatic;

@Component({
    selector: 'main-wrapper',
    templateUrl: '../../templates/main-wrapper.html'
})
export class MainComponent implements OnInit {

    private screenType: string;
    private screenTypes: ScreenTypes = ScreenTypes;
    private userType: string;
    private userTypes: any = SessionConfig.USER_TYPES;

    constructor(private sessionService: SessionService, private emitterService: EmitterService, private notificationService: NotificationsService, private screenDetectionService: ScreenDetectionService, private translateService: TranslateService, private transporterService: TransporterService) {
        this.screenType = this.screenDetectionService.detectScreenType(screen.width);
    }

    public options = {
        position: ["bottom", "left"],
        timeOut: 1000,
        lastOnBottom: true
    };

    ngOnInit(): void {
        this.userType = this.sessionService.getUserType();
        if (this.transporterService.keyExist('language')) {
            this.translateService.use(this.transporterService.getData('language'));
        }
        else {
            this.translateService.use('en');
        }
        /***
         let socket: SocketIOClient.Emitter = io.connect();
         socket.on(SocketConfig.CONNECTION_SETUP, () => {
            socket.emit(SocketConfig.AUTHORIZATION, this.sessionService.getSession());
        });

         socket.on(SocketConfig.PATIENT_UPDATE, (data: any) => {
            this.emitterService.emit({command: Commands.UPDATE, data: data});

        });
         ***/
    }
}
