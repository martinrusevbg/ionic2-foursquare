import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class FoursquareService {
    private client_id: string  = 'G5BNSUTDDQZGDAOBN1DSYTBRQ2TIPMLY1JGYRWJJGYHBFWE5';
    private client_secret: string  = 'HX1LAIW5G4CZINMSYNPMKPCQ2AJYBEQHX4PTHNF0FXRNBNON';

    constructor(private http: Http) {
    }

    getObj(search) {
        let obj = this.http.get('https://api.foursquare.com/v2/venues/explore/?near='+search+'&section=food&client_id='+this.client_id+'&client_secret='+this.client_secret+'&v=20130815');
        return obj;
    }

    getDetails(id) {
        let obj = this.http.get('https://api.foursquare.com/v2/venues/'+id+'?client_id='+this.client_id+'&client_secret='+this.client_secret+'&v=20130815');
        return obj;
    }
}