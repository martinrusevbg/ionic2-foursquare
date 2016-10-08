import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FoursquareService} from '../../services/foursquare';

@Component({
    templateUrl: 'build/pages/details/details.html',
    providers: [FoursquareService]
})
export class DetailsPage {
    public objDetail;
    public obj;

    constructor(private foursquare: FoursquareService,
                private nav: NavController, 
                private navParams: NavParams) {
        
        this.obj = navParams.get('obj');
        
        this.foursquare.getDetails(this.obj.id).subscribe(
            data => this.objDetail = data.json(),
            err => {
                console.error(err);
            },
            () => console.log('getDetails completed')
        );
    }
}

