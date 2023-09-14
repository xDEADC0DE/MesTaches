import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { TacheCoordonnees } from '../models/tache';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'gps'
})
export class GpsPipe implements PipeTransform {
  public constructor(@Inject(LOCALE_ID) private _locale: string) { }

  public transform(value: TacheCoordonnees, map?: string): string {
    let str = '';
    if (map === 'googlemap') {
      // https://maps.google.com/maps?q=lat,lng
      let dp = new DecimalPipe('en-US');
      str = 'https://maps.google.com/maps?q=';
      str += dp.transform(value.latitude, '.6');
      str += ',';
      str += dp.transform(value.longitude, '.6');
    } else {
      str =  this.convertDMS(coordonnees.latitude,coordonnees.longitude)
    }
    return str;
  }


  private toDegreesMinutesAndSeconds(coordinate:number) {
    var absolute = Math.abs(coordinate);
    var degrees = Math.floor(absolute);
    var minutesNotTruncated = (absolute - degrees) * 60;
    var minutes = Math.floor(minutesNotTruncated);
    var seconds = Math.floor((minutesNotTruncated - minutes) * 60);
    return degrees + "°" + minutes + "′" + seconds + "″";
  }

  private convertDMS(lat:number, lng:number) {
    var latitude = this.toDegreesMinutesAndSeconds(lat);
    var latitudeCardinal = lat >= 0 ? "N" : "S";

    var longitude = this.toDegreesMinutesAndSeconds(lng);
    var longitudeCardinal = lng >= 0 ? "E" : "W";

    return latitude + " " + latitudeCardinal + "\n" + longitude + " " + longitudeCardinal;
  }

}
