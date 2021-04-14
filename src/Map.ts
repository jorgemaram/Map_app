import { MapGeoCode } from "./MapGeoCode";
import { Person } from "./Person";

export class Map {
    private googleMap: google.maps.Map;
    private geoCoder : MapGeoCode
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId)!,
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            });
        this.geoCoder = new MapGeoCode(this.googleMap);
    }

    AddMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: parseInt(mappable.getLocation.lat),
                lng: parseInt(mappable.getLocation.lng)
            }
        })
        this.geoCoder.AddMarkerInfo(marker, mappable);
    }
    SearchText(options: SearchOptions): void{
        this.geoCoder.SearchText(options)
    }
}