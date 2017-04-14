import {ISession} from "./ISession";
import {SessionConfig} from "../config/SessionConfig";

export abstract class AbstractSession implements ISession {

    setSession(value: string): void {
        sessionStorage.setItem(SessionConfig.AUTH_TOKEN, value);
    }

    getSession(): string {
        return sessionStorage.getItem(SessionConfig.AUTH_TOKEN);
    }

    deleteSession(): void {
        sessionStorage.removeItem(SessionConfig.AUTH_TOKEN)
    }

    getUserData(): string {
        return JSON.parse(localStorage.getItem(SessionConfig.AUTH_USER));
    }

    setUserData(value: string) {
        localStorage.setItem(SessionConfig.AUTH_USER, value);
    }

    deleteUserData(): void {
        localStorage.removeItem(SessionConfig.AUTH_USER);
    }


}