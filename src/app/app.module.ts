import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './view/sidebar/sidebar.component';
import { FeedComponent } from './view/feed/feed.component';
import { TaxeTrimestrielleComponent } from './view/payment/taxe-trimestrielle/taxe-trimestrielle.component';
import { TaxeAnnuelleComponent } from './view/payment/taxe-annuelle/taxe-annuelle.component';
import { GestionRedevableComponent } from './view/gestion/gestion-redevable/gestion-redevable.component';
import { GestionLocalComponent } from './view/gestion/gestion-local/gestion-local.component';
import { GestionTauxTrimestrielleComponent } from './view/gestion/gestion-taux-trimestrielle/gestion-taux-trimestrielle.component';
import { GestionTauxAnnuelleComponent } from './view/gestion/gestion-taux-annuelle/gestion-taux-annuelle.component';
import { GestionNotificationComponent } from './view/gestion/gestion-notification/gestion-notification.component';
import { CreateTauxTrimestrielleComponent } from './view/create-taux-trimestrielle/create-taux-trimestrielle.component';
import { SideBarComponent } from './view/side-bar/side-bar.component';
import { GestionComponent } from './view/gestion/gestion.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FeedComponent,
    TaxeTrimestrielleComponent,
    TaxeAnnuelleComponent,
    GestionRedevableComponent,
    GestionLocalComponent,
    GestionTauxTrimestrielleComponent,
    GestionTauxAnnuelleComponent,
    GestionNotificationComponent,
    CreateTauxTrimestrielleComponent,
    SideBarComponent,
    GestionComponent,
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
    TaxeAnnuelleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
