import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedevableCreateComponent } from './view/gestion/redevable/redevable-create/redevable-create.component';
import { RedevableListComponent } from './view/gestion/redevable/redevable-list/redevable-list.component';
import { LocalCreateComponent } from './view/gestion/local/local-create/local-create.component';
import { LocalListComponent } from './view/gestion/local/local-list/local-list.component';
import { TauxAnuelleCreateComponent } from './view/gestion/tauxAnnuelle/taux-anuelle-create/taux-anuelle-create.component';
import { TauxAnuelleListComponent } from './view/gestion/tauxAnnuelle/taux-anuelle-list/taux-anuelle-list.component';
import { TauxTrimestrielleCreateComponent } from './view/gestion/tauxTrimestrielle/taux-trimestrielle-create/taux-trimestrielle-create.component';
import { TauxTrimestrielleListComponent } from './view/gestion/tauxTrimestrielle/taux-trimestrielle-list/taux-trimestrielle-list.component';
import { TaxeTrimestrielleCreateComponent } from './view/payment/taxeTrimestrielle/taxe-trimestrielle-create/taxe-trimestrielle-create.component';
import { TaxeTrimestrielleListComponent } from './view/payment/taxeTrimestrielle/taxe-trimestrielle-list/taxe-trimestrielle-list.component';
import { TaxeAnnuelleCreateComponent } from './view/payment/taxeAnnuelle/taxe-annuelle-create/taxe-annuelle-create.component';
import { TaxeAnnuelleListComponent } from './view/payment/taxeAnnuelle/taxe-annuelle-list/taxe-annuelle-list.component';
import { CategorieCreateComponent } from './view/gestion/catogories/categorie-create/categorie-create.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { AuthenficationComponent } from './view/authenfication/authenfication.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {SideBarComponent} from "./view/side-bar/side-bar.component";
import {AuthGuardService} from "./controller/services/auth-guard.service";
import {TaxeAnnuelleService} from "./controller/services/taxe-annuelle.service";
import {TaxeTrimestrielleService} from "./controller/services/taxe-trimestrielle.service";
import {TauxAnnuelleService} from "./controller/services/taux-annuelle.service";
import {TauxTrimestrielle} from "./controller/models/taux-trimestrielle.model";
import {MatDialogModule} from "@angular/material/dialog";


const appRoutes: Routes =[
  { path: '' , canActivate: [AuthGuardService]  , component :TaxeTrimestrielleListComponent },
  { path: 'auth' ,   component : AuthenficationComponent},
  { path: 'taxesTrimestrielles' ,canActivate: [AuthGuardService] ,  component : TaxeTrimestrielleListComponent},
  { path: 'taxesTrimestrielles/add' ,canActivate: [AuthGuardService] ,  component : TaxeTrimestrielleCreateComponent},
  { path: 'taxesAnnuelles' , canActivate: [AuthGuardService] ,  component : TaxeAnnuelleListComponent},
  { path: 'taxesAnnuelles/add' ,canActivate: [AuthGuardService] ,   component : TaxeAnnuelleCreateComponent},
  { path: 'redevables' , canActivate: [AuthGuardService] ,  component : RedevableListComponent},
  { path: 'redevables/add' , canActivate: [AuthGuardService] ,  component : RedevableCreateComponent},
  { path: 'local' ,  canActivate: [AuthGuardService] , component : LocalListComponent},
  { path: 'local/add' ,canActivate: [AuthGuardService] ,   component : LocalCreateComponent},
  { path: 'tauxTrimestrielle',canActivate: [AuthGuardService] ,   component : TaxeTrimestrielleListComponent},
  { path: 'tauxAnnuelles',canActivate: [AuthGuardService] ,   component : TauxAnuelleListComponent},
  { path: 'tauxAnnuelles/add',canActivate: [AuthGuardService] ,   component : TauxAnuelleCreateComponent},
  { path: 'tauxTrimestrielle/add' , canActivate: [AuthGuardService] ,  component : TauxTrimestrielleCreateComponent},
  { path: 'not-found' , component : NotFoundComponent},
  { path: '**' , redirectTo:'/not-found'},
]
@NgModule({
  declarations: [
    AppComponent,
    RedevableCreateComponent,
    RedevableListComponent,
    LocalCreateComponent,
    LocalListComponent,
    TauxAnuelleCreateComponent,
    TauxAnuelleListComponent,
    TauxTrimestrielleCreateComponent,
    TauxTrimestrielleListComponent,
    TaxeTrimestrielleCreateComponent,
    TaxeTrimestrielleListComponent,
    TaxeAnnuelleCreateComponent,
    TaxeAnnuelleListComponent,
    CategorieCreateComponent,
    AuthenficationComponent,
    NotFoundComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
