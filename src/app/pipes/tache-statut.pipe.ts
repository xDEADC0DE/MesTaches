import { Pipe, PipeTransform } from '@angular/core';
import { TacheStatut } from '../models/tache';

@Pipe({
  name: 'tachestatut'
})
export class TacheStatutPipe implements PipeTransform {
  public transform(value: TacheStatut, css?: string): string {
    let str = '';
    switch (value) {
      case TacheStatut.EN_COURS:
        str = css === 'bootstrap' ? 'text-bg-info' : 'à faire';
        break;
      case TacheStatut.EN_RETARD:
        str = css === 'bootstrap' ? 'text-bg-warning' : 'on se magne';
        break;
      case TacheStatut.CLOTUREE:
        str = css === 'bootstrap' ? 'text-bg-dark' : 'ça, c\'est fait 😎';
        break;
    }
    return str;
  }
}
