import { Component } from '@angular/core';
import { Tache, TacheStatut, TrierPar } from 'src/app/models/tache';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent {
  private _taches: Tache[] = [];
  private get taches(): Tache[] { return this._taches; }
  private set taches(taches: Tache[]) {
    this._taches = taches;
    this.filtrer(this.filtreActif);
  }

  private _tachesFiltrees: Tache[] = [];
  public get tachesFiltrees(): Tache[] { return this._tachesFiltrees; }
  private set tachesFiltrees(taches: Tache[]) { this._tachesFiltrees = taches; }

  public lesFiltres = TacheStatut;
  public filtreActif?: TacheStatut;
  public filtrer(filtre?: TacheStatut): void {
    this.filtreActif = filtre;
    this.tachesFiltrees = 
      this.taches.filter(t => filtre === undefined || filtre === t.statut);
  }

  public lesTris = TrierPar;
  public triActif?: TrierPar;
  public trier(tri: TrierPar): void {
    this.triActif = tri;
    let lambda: (t1: Tache, t2: Tache) => number;
    if (tri === TrierPar.LIBELLE)
      lambda = (t1, t2) => t1.libelle.localeCompare(t2.libelle);
    else
      lambda = (t1, t2) => t2.echeance.getTime() - t1.echeance.getTime();
    this.taches = this.taches.sort(lambda);
  }




  public constructor(private _ts: TacheService) {
    this._ts.obtenirToutes().subscribe(models => this.taches = models);
  }
}
