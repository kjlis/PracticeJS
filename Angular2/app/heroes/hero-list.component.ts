/**
 * Created by klis on 08/02/16.
 */
import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {Router} from "angular2/router";

@Component({
    selector: 'my-heroes',
    template: `
        <h2>Heroes</h2>
        <ul>
            <li *ngFor="#hero of heroes" (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
         </ul>
        `,
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0em;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #EEE;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0em 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
  }
`],
    directives: [HeroDetailComponent]
})
export class HeroListComponent implements OnInit {

    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes: Hero[];

    constructor(
        private _service: HeroService,
        private _router: Router
    ) {}

    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this._router.navigate(['HeroDetail', {id: hero.id}])}
    getHeroes() {
        this._service.getHeroes().then(heroes => this.heroes = heroes);
    }

}
