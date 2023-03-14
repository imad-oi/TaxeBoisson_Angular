import {Component, OnInit} from '@angular/core';
import {TaxeAnnuelleService} from "../../../../controller/services/taxe-annuelle.service";
import {TaxeAnnuelle} from "../../../../controller/models/taxe-annuelle.model";

@Component({
  selector: 'app-taxe-annuelle-list',
  templateUrl: './taxe-annuelle-list.component.html',
  styleUrls: ['./taxe-annuelle-list.component.css']
})
export class TaxeAnnuelleListComponent implements OnInit {

  reference : string = '' ;
  constructor(private  taxeAnnuelleService : TaxeAnnuelleService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.taxeAnnuelleService.findAll().subscribe(
      data => this.taxesAnnuelles = data
    )
  }

  get taxeAnnuelle(): TaxeAnnuelle {
    return this.taxeAnnuelleService.taxeAnnuelle;
  }

  public findByReference(ref:string):void{
    alert(ref) ;
    this.taxeAnnuelleService.findByReference(ref).subscribe(
      data=>{
        this.taxeAnnuelle = data ;
      }
  )
    this.reference = '' ;
  }

  set taxeAnnuelle(value: TaxeAnnuelle) {
    this.taxeAnnuelleService.taxeAnnuelle = value;
  }

  get taxesAnnuelles(): Array<TaxeAnnuelle> {
    return this.taxeAnnuelleService.taxesAnnuelles;
  }

  set taxesAnnuelles(value: Array<TaxeAnnuelle>) {
    this.taxeAnnuelleService.taxesAnnuelles = value;
  }

}
