import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../controller/services/auth.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements  OnInit{

  paymentItems = [
    {
      nom : 'Taxe Trimestrielle' ,
      icon  : 'fa fa-home fa-2x' ,
      route : '/taxesTrimestrielles'
    },
    {
      nom : 'Taxe Annuelle' ,
      icon  : 'fa fa-user fa-2x' ,
      route : '/taxesAnnuelles'
    }
  ]

  gestionItems = [
    {
      nom : 'Redevables' ,
      icon  : 'fa fa-home fa-2x' ,
      route : '/redevables'
    },
    {
      nom : 'Locaux' ,
      icon  : 'fa fa-home fa-2x' ,
      route : '/local'
    },
    {
      nom : 'Taux Trimestrielle' ,
      icon  : 'fa fa-home fa-2x' ,
      route : '/tauxTrimestrielle'
    },
    {
      nom : 'Taux Annuelles' ,
      icon  : 'fa fa-home fa-2x' ,
      route : '/tauxAnnuelles'
    }
  ]

  isAuth:Boolean = false ;
  selectedItem: any ;
  constructor(private  authService : AuthService) {
  }


  ngOnInit(): void {
    this.isAuth = this.authService.isAuth ;
    }

  onClick(item: any) {
    this.selectedItem = item ;
  }

}
