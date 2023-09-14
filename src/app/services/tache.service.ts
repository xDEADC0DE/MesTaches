import { Injectable } from '@angular/core';
import { Tache, TacheAjout, TacheCoordonnees, TacheStatut } from '../models/tache';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TodoDTO } from '../models/tache.dto';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private _baseUrl = 'http://localhost:54321/api/Todo/';
  public constructor(private _http: HttpClient) { }

  private toModel(dto: TodoDTO): Tache {
    let echeance: Date = new Date(dto.dueDate);
    
    let statut: TacheStatut = TacheStatut.CLOTUREE;
    if(!dto.isDone){
      statut = new Date().getTime() < echeance.getTime() ? TacheStatut.EN_COURS : TacheStatut.EN_RETARD;
    }
    
    let supprimable: boolean = dto.isDone && echeance.getTime() < new Date().getTime();

    let coordonnees: TacheCoordonnees | null = null;
    if(dto.latitude !== null && dto.longitude !== null)
      coordonnees = new TacheCoordonnees(dto.latitude, dto.longitude);

    return new Tache(
      dto.todoId, dto.title, dto.isDone, statut, echeance, coordonnees, supprimable
    );
  } 

  public obtenirToutes(): Observable<Tache[]> { 
    return this._http
      .get<TodoDTO[]>(this._baseUrl)
      .pipe(
        map(dtos => dtos.map(dto => this.toModel(dto)))
      );
  }

  public inverserEtat(tache: Tache): Observable<Tache> { throw new Error('not implemented'); }
  public supprimer(tache: Tache): Observable<Tache> { throw new Error('not implemented'); }
  public ajouter(tache: TacheAjout): Observable<Tache> { throw new Error('not implemented'); }
}
