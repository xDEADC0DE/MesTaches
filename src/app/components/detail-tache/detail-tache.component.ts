import { Component, Input } from '@angular/core';
import { Tache } from 'src/app/models/tache';

@Component({
  selector: 'app-detail-tache',
  templateUrl: './detail-tache.component.html',
  styleUrls: ['./detail-tache.component.css']
})
export class DetailTacheComponent {
  @Input()
  public laTache?: Tache;
}
