import * as bcrypt from 'bcrypt-nodejs';
import * as cryptoJs from 'crypto-js';
import {Session} from "./session";
import {Constants} from "../../../../common/config/constants/constants";

var crypto: any = cryptoJs;

export class Crypt {

    hashPassword(value: string): string {
        return bcrypt.hashSync(value);
    }

    comparePassword(value: string, hash: string): boolean {
        return bcrypt.compareSync(value, hash);
    }

    encrypt(value: Session): string {
        return crypto.AES.encrypt(JSON.stringify(value), Constants.SECRET).toString();
    }

    decrypt(value: string): Session {
        var bytes  = crypto.AES.decrypt(value.toString(), Constants.SECRET);
        return JSON.parse(bytes.toString(crypto.enc.Utf8));
    }

    createSession(userId: string): Session {
        return new Session(userId);
    }

    createNewSession(session: Session): Session {
        var newSession = this.createSession(session.userId);
        newSession.createTime = session.createTime;
        return newSession;
    }

    decryptSession(session: string): Session {
        return <Session> this.decrypt(session);
    }

    encryptSession(session: Session): string {
        return this.encrypt(session);
    }

    sha256(value: string): string {
        return require("crypto-js/sha256")(value).toString();
    }
}