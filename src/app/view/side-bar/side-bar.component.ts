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
      icon  : 'fa fa-home' ,
      route : '/taxesTrimestrielles'
    },
    {
      nom : 'Taxe Annuelle' ,
      icon  : 'fa fa-user' ,
      route : '/taxesAnnuelles'
    }
  ]

  gestionItems = [
    {
      nom : 'Redevables' ,
      icon  : 'fa fa-home' ,
      route : '/redevables'
    },
    {
      nom : 'Locaux' ,
      icon  : 'fa fa-home' ,
      route : '/local'
    },
    {
      nom : 'tauxTrimestrielle' ,
      icon  : 'fa fa-home' ,
      route : '/tauxTrimestrielle'
    },
    {
      nom : 'tauxAnnuelles' ,
      icon  : 'fa fa-home' ,
      route : '/tauxAnnuelles'
    }
  ]

  isAuth:Boolean = false ;
  constructor(private  authService : AuthService) {
  }


  ngOnInit(): void {
    this.isAuth = this.authService.isAuth ;
    }

}
