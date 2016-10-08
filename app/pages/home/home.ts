import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../details/details';
import {FoursquareService} from '../../services/foursquare';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [FoursquareService]
})
export class HomePage{
  public foundObj;
  public search;

  constructor(private foursquare: FoursquareService,
    private nav: NavController) {
  }

  getObj() {
    this.foursquare.getObj(this.search).subscribe(
      data => {
        this.foundObj = data.json().response.groups[0].items;
      },
      err => console.error(err),
      () => console.log('getObj completed')
    );
  }

  goToDetails(obj) {
    this.nav.push(DetailsPage, { obj: obj });
  }
}