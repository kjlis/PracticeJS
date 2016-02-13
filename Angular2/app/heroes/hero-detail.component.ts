import {Component} from 'angular2/core';
import {Hero} from './hero';
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
            <button (click)="gotoHeroes()">Back</button>
        </div>
    `,
    inputs: ['hero']
})
export class HeroDetailComponent {
    hero: Hero;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _service: HeroService
    ){}

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getHero(id).then(hero => this.hero = hero)
    }

    gotoHeroes() {
        this._router.navigate(['Heroes'])
    }
}