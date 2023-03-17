import {Categorie} from "./categorie.model";
import {Redevable} from "./redevable.model";

export class Local {
  public id : number | undefined;
  public ref : string | undefined;
  public dernierTrimestrePaye : number | undefined;
  public derniereAnneePaye : number | undefined;
  public derniereAnneeDeclare : number | undefined;
  public categorie : Categorie | undefined;
  public redevable : Redevable | undefined;

  constructor() {
  }
}
