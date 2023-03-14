import {Injectable} from '@angular/core';
import {TaxeAnnuelle} from "../models/taxe-annuelle.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaxeAnnuelleService {


  constructor(private http: HttpClient) {
  }

  private _taxeAnnuelle: TaxeAnnuelle = new TaxeAnnuelle();
  private _taxesAnnuelles: Array<TaxeAnnuelle> = [];

  public save(): Observable<TaxeAnnuelle> {
    return this.http.post<TaxeAnnuelle>('http://localhost:8036/api/v1/taxeBoissonAnnuelle/', this.taxeAnnuelle);
  }

  public findAll(): Observable<Array<TaxeAnnuelle>> {
    return this.http.get<Array<TaxeAnnuelle>>('http://localhost:8036/api/v1/taxeBoissonAnnuelle/');
  }

  public findByReference(reference: string): Observable<TaxeAnnuelle> {
    return this.http.get<TaxeAnnuelle>('http://localhost:8036/api/v1/taxeBoissonAnnuelle/' + 'ref/' + reference);
  }

  get taxeAnnuelle(): TaxeAnnuelle {
    return this._taxeAnnuelle;
  }

  set taxeAnnuelle(value: TaxeAnnuelle) {
    this._taxeAnnuelle = value;
  }

  get taxesAnnuelles(): Array<TaxeAnnuelle> {
    return this._taxesAnnuelles;
  }

  set taxesAnnuelles(value: Array<TaxeAnnuelle>) {
    this._taxesAnnuelles = value;
  }
}
