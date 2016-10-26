/**
 * Created by martin on 23/10/16.
 */
function Foursquare() {
    this.id = "";
    this.name = "";
    this.url = "";
    this.price = "";
    this.rating = "";
    this.photos = [];
}
Foursquare.prototype.parse = function (jsonObj) {
    this.id = jsonObj.id || "";
    this.name = jsonObj.name || "";
    this.url = jsonObj.url || "";
    this.price = jsonObj.price || "";
    this.rating = jsonObj.rating || "";
    this.photos = jsonObj.photos || "";
};
//# sourceMappingURL=foursquare.js.map