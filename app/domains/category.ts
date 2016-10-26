import {Injectable} from '@angular/core';
import {Foursquare} from './foursquare';

@Injectable()
export class  Category {
    public type: string;
    public name: string;
    public foursquares: Foursquare[] = [];

    constructor () {
    }

    parse(jsonObj) {
        var self = this;
        this.type = jsonObj.type || "";
        this.name = jsonObj.name || "";
        if (typeof jsonObj.items != 'undefined') {
            if( jsonObj.items.length > 0 ) {
                for (let venue of jsonObj.items ) {
                    var param = new Foursquare();
                    param.parse(venue.venue);
                    self.foursquares.push(param);
                }
            }
        }
    }

}
