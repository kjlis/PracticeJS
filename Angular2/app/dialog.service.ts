import {Injectable} from "angular2/core";
@Injectable()
export class DialogService {
    confirm(message?:String) {
        return new Promise<boolean>((resolve, reject) => resolve(window.confirm(message || 'Is it OK?')));
    }
}