import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CrisisListComponent} from "./crisis-list.component";
import {HeroListComponent} from "./heroes/hero-list.component";
import {HeroService} from "./heroes/hero.service";
import {HeroDetailComponent} from "./heroes/hero-detail.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['CrisisCenter']">Crisis Center</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})
@RouteConfig([
    {
        path: '/crisis-center',
        name: 'CrisisCenter',
        component: CrisisListComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroListComponent
    },
    {
        path: '/hero/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])
export  class AppComponent {
}