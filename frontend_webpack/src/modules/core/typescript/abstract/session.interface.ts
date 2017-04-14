export interface ISession {

    setSession(value: string): void;

    getSession(key: string): string;

    deleteSession(): void;

    getUserData(key: string): string;

    setUserData(value: string): void;

    deleteUserData(): void;

}