import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
    template: `
        <ion-toolbar>
            <button (click)="onCancelClick()">ยกเลิก</button>
            
            <ion-title>กรองเวลางาน</ion-title>
            
            <ion-buttons end>
                <button (click)="onClearClick()">ล้าง</button>
            </ion-buttons>
        </ion-toolbar>
        <ion-content padding>
            <ion-item>
                <ion-label>Date</ion-label>
                <ion-datetime displayFormat="MMM/YYYY" [max]="maxDate" [(ngModel)]="filter">
                </ion-datetime>
            </ion-item>

            <button block (click)="onSearchClick()">ค้นหา</button>
        </ion-content>
    `
})
export class SearchFilterModal {
    private filter: string;
    private maxDate: string;

    constructor(private _view: ViewController) {
        const now = new Date(Date.now());
        this.maxDate = now.getMonth() + 1 + "/" + now.getFullYear();
    }
    onCancelClick() {
        this._view.dismiss();
    }
    onSeachClick() {
        this._view.dismiss();
    }
    onClearClick() {
        this._view.dismiss();
    }
}