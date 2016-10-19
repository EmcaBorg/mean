import { Cookie } from 'ng2-cookies/ng2-cookies';


export abstract class StorageService{

    constructor(protected key: string, protected value: any){

    }

    abstract setSession(): void;

}