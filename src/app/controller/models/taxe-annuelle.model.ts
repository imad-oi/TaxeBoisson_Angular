import {Local} from "./local.model";
import {Redevable} from "./redevable.model";
import {Categorie} from "./categorie.model";

export class TaxeAnnuelle {

  public id: number | undefined ;
  public ref : string | undefined ;
  public annee: number | undefined ;
  public dateDeclaration: Date | undefined ;
  public total: number | undefined ;
  public local: Local | undefined   ;
  public redevable: Redevable | undefined   ;
  public categorie: Categorie | undefined   ;

  constructor() {
  }

}
