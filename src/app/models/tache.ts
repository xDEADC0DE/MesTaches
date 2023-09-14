export class Tache {
  public constructor(
    public readonly id: number,
    public readonly libelle: string,
    public readonly estTerminee: boolean,
    public readonly statut: TacheStatut,
    public readonly echeance: Date,
    public readonly coordonnees: TacheCoordonnees | null,
    public readonly estSupprimable: boolean,
  ) { }
}

export enum TacheStatut { 
  EN_COURS, EN_RETARD, CLOTUREE
}

export class TacheCoordonnees {
  public constructor(
    public readonly latitude: number,
    public readonly longitude: number,
  ) { }
}

export class TacheAjout {
  public constructor(
    public libelle: string,
    public echeance: Date,
    public coordonnees: TacheCoordonnees | null,
  ) { }
}

export enum TrierPar { 
  LIBELLE, ECHEANCE
}