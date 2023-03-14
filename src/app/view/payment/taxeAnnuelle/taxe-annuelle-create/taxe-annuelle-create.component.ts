import {Component, OnInit} from '@angular/core';
import {TaxeAnnuelleService} from "../../../../controller/services/taxe-annuelle.service";
import {TaxeAnnuelle} from "../../../../controller/models/taxe-annuelle.model";

@Component({
  selector: 'app-taxe-annuelle-create',
  templateUrl: './taxe-annuelle-create.component.html',
  styleUrls: ['./taxe-annuelle-create.component.css']
})
export class TaxeAnnuelleCreateComponent  implements  OnInit{
  constructor(private taxeAnnuelleService:TaxeAnnuelleService) {
  }
  ngOnInit(): void {
  }

  public save():void{
    this.taxeAnnuelleService.save().subscribe(
      data=>{
        if (data != null) {
          this.taxeAnnuelleService.taxesAnnuelles.push({...this.taxeAnnuelle}) ;
          this.taxeAnnuelleService.taxeAnnuelle = new TaxeAnnuelle() ;
          alert("success") ;
        }else {
          alert("erreur") ;
         }
      }
    )
  }


  get taxeAnnuelle(): TaxeAnnuelle {
    return this.taxeAnnuelleService.taxeAnnuelle;
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
