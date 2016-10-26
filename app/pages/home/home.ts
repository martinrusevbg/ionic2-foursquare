import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../details/details';
import {FoursquareService} from '../../services/foursquare';
import {Category} from '../../domains/category';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [FoursquareService,Category]
})
export class HomePage{
  public foundObj;
  public category;
  public search;

  constructor(private foursquare: FoursquareService,
    private nav: NavController) {
  }

  getObj() {
    this.foursquare.getObj(this.search).subscribe(
      data => {
        this.category = new Category();
        this.category.parse(data.json().response.groups[0]);
        this.foundObj = this.category.foursquares;
      },
      err => console.error(err),
      () => console.log('getObj completed')
    );
  }

  goToDetails(obj) {
    this.nav.push(DetailsPage, { obj: obj });
  }
}