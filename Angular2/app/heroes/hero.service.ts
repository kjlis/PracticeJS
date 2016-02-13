import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes'
import {Hero} from "./hero";

@Injectable()
export class HeroService {
    getHeroes() {
        return heroesPromise;
    }

    getHero(id: number | String) {
        return heroesPromise.then(heroes => heroes.filter(h => h.id === +id)[0]);
    }
}

var heroesPromise = Promise.resolve(HEROES);