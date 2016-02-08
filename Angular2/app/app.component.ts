/**
 * Created by klis on 08/02/16.
 */
import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'nostra-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero}} details!</h2>
        <div><label>id: </label></div>
        `
})
export class AppComponent {
    public title = 'Tour of Heroes';
    public hero = 'Windstorm';
}