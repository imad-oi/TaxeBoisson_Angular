import {Component, OnInit} from '@angular/core';
import {TaxeAnnuelleService} from "../../../../controller/services/taxe-annuelle.service";
import {TaxeAnnuelle} from "../../../../controller/models/taxe-annuelle.model";
import { TaxeAnnuelleCreateComponent} from "../taxe-annuelle-create/taxe-annuelle-create.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-taxe-annuelle-list',
  templateUrl: './taxe-annuelle-list.component.html',
  styleUrls: ['./taxe-annuelle-list.component.css']
})
export class TaxeAnnuelleListComponent implements OnInit {

  reference : string = '' ;
  constructor(private  taxeAnnuelleService : TaxeAnnuelleService,
              private  dialog : MatDialog
              ) {
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



  public ajouterTaxe(): void {
     const dialogRef = this.dialog.open(TaxeAnnuelleCreateComponent, {
      width: '600px', // Définissez la largeur du dialogue
      disableClose: true // Empêchez l'utilisateur de fermer le dialogue en cliquant à l'extérieur
    });

    // Écoutez l'événement 'afterClosed' pour récupérer les données du formulaire
    dialogRef.afterClosed().subscribe(result => {
     console.log(result);
    });
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


