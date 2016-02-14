import {Injectable} from 'angular2/core';
import {Crisis} from "./crisis";

@Injectable()
export class CrisisService {
    getCrises() {
        return crisesPromise;
    }

    getCrisis(id: number | String) {
        return crisesPromise.then(crises => crises.filter(c => c.id === +id)[0]);
    }
}


var CRISES: Crisis[] = [{id: 1, name: 'Slow Internet Crisis'}];
var crisesPromise = Promise.resolve(CRISES);
