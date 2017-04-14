import {Injectable} from '@angular/core';
import {ITransportData} from "../abstract/ITransportData";


@Injectable()
export class TransporterService {

    constructor() {
    }

    public dataTransported: ITransportData = {};

    public keyExist(key: string): boolean {
        return this.dataTransported.hasOwnProperty(key) ? true : false;
    }

    public setData(key: string, value: any): void {
        this.dataTransported[key] = value;
    }

    public getData(key: string): any {
        return this.dataTransported[key];
    }

    public deleteData(key: string): void {
        delete this.dataTransported[key];
    }

}