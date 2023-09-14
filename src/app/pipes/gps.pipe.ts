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
      let dp = new DecimalPipe(this._locale);
      str += 'lat: ' + dp.transform(value.latitude, '.6');
      str += ', lng: ' + dp.transform(value.longitude, '.6');
    }
    return str;
  }

}
