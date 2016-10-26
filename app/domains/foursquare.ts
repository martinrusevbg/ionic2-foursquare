import {Injectable} from '@angular/core';

@Injectable()
export class  Foursquare {
    private id: number;
    private name: string;
    private url: string;
    private price: string;
    private rating: number;
    private photos: Array<string>;

    parse(jsonObj) {
        this.id = jsonObj.id || 0;
        this.name = jsonObj.name || "";
        this.url = jsonObj.url || "";
        if(jsonObj.price != undefined)
            this.price = jsonObj.price.tier || "";
        this.rating = jsonObj.rating || 0;
        this.photos = jsonObj.photos.groups || [];
    }
}