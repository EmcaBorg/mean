import {Response} from '@angular/http';
import {SessionConfig} from "../config/SessionConfig";

export class ResponseExtractor {

    public static headerExtractor(response: Response, header: string): any {
        return response.headers.get(header);
    }

    public static bodyExtractor(response: Response): any {
        return response.json();
    }

    public static dataExtractor(body: any): any {
        return body.data;
    }

    public static codeTranslateFormat(modul: string, code: string) {
        return modul + '.' + code.replace(/-/g, '_');
    }
}