import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { name, address, image } from 'faker';

interface Card {
    title: string;
    city: string;
    country: string;
    zipCode: string;
    cols: number;
    rows: number;
}
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


    /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
            if (matches) {
                return this.getData().map( (dataSet: Card) => 
                    Object.assign( dataSet, { cols: 2 })    
                )
            }

            return this.getData();
        })
    );

    constructor(
        private breakpointObserver: BreakpointObserver
    ) { }

    getData(): Card[] {
        let data: Card[] = [];
        for (let i=0; i <= 20; i++) {
            data.push({
                title: name.findName(),
                city: address.city(),
                country: address.country(),
                zipCode: address.zipCode(),
                cols: 1,
                rows: 1
            })
        }
        return data;
    }
}
