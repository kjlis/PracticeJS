import {Component} from 'angular2/core';
import {Crisis} from './crisis';
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {CrisisService} from "./crisis.service";
import {OnInit} from "angular2/core";
import {CanDeactivate} from "angular2/router";
import {ComponentInstruction} from "angular2/router";
import {DialogService} from "../dialog.service";

@Component({
    selector: 'my-crisis-detail',
    template: `
        <div *ngIf="crisis">
            <h2>{{crisis.name}} details!</h2>
            <div><label>id: </label>{{crisis.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="editName" placeholder="name"/>
            </div>
            <button (click)="save()">Save</button>
            <button (click)="cancel()">Cancel</button>
        </div>
    `,
    styles: ['input {width: 20em}']
})
export class CrisisDetailComponent implements OnInit, CanDeactivate {
    editName: string;
    crisis: Crisis;

    cancel() {
        this.editName = this.crisis.name;
        this.gotoCrisisCenter();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrisisCenter();
    }

    routerCanDeactivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        if (!this.crisis || this.crisis.name === this.editName)
            return true;
        return this._dialog.confirm('Discard changes?');
    }

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _service: CrisisService,
        private _dialog: DialogService
    ){}

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getCrisis(id).then(crisis => {
            if (crisis) {
                this.crisis = crisis;
                this.editName = crisis.name;
            } else
                this.gotoCrisisCenter();
        })
    }

    gotoCrisisCenter() {
        this._router.navigate(['CrisisCenter'])
    }
}