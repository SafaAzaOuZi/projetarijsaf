import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { SeconnecterComponent } from './navbar/seconnecter/seconnecter.component';
import { SinscrireComponent } from './navbar/sinscrire/sinscrire.component';
import { AproposComponent } from './navbar/apropos/apropos.component';
import { ErreurComponent } from './navbar/erreur/erreur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaquillagesComponent } from './maquillages/maquillages.component';
import { ProduitsdesoinsComponent } from './produitsdesoins/produitsdesoins.component';
import { ProduitshygienesComponent } from './produitshygienes/produitshygienes.component';
import { DetailsparfumsComponent } from './detailsparfums/detailsparfums.component';
import { ParfumsComponent } from './parfums/parfums.component';
import { HttpClientModule} from "@angular/common/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { AjouterParfumComponent } from './ajouter-parfum/ajouter-parfum.component';
import { AjoutermaquillageComponent } from './ajoutermaquillage/ajoutermaquillage.component';
import { DetailsmaquillagesComponent } from './detailsmaquillages/detailsmaquillages.component';
import { AjouterproduitssoinsComponent } from './ajouterproduitssoins/ajouterproduitssoins.component';
import { DetailsproduitssoinsComponent } from './detailsproduitssoins/detailsproduitssoins.component';
import { DetailproduithygieneComponent } from './detailproduithygiene/detailproduithygiene.component';
import { AjouterproduitshygienesComponent } from './ajouterproduitshygienes/ajouterproduitshygienes.component';
import { ModifierparfumComponent } from './modifierparfum/modifierparfum.component';
import { ModifiermaquillageComponent } from './modifiermaquillage/modifiermaquillage.component';
import { ModifierproduitsoinComponent } from './modifierproduitsoin/modifierproduitsoin.component';
import { ModifierproduithygieneComponent } from './modifierproduithygiene/modifierproduithygiene.component';
import { ModifiermotpassComponent } from './modifiermotpass/modifiermotpass.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AcceuilComponent,
    ListProduitComponent,
    SeconnecterComponent,
    SinscrireComponent,
    AproposComponent,
    ErreurComponent,
    MaquillagesComponent,
    ProduitsdesoinsComponent,
    ProduitshygienesComponent,
    DetailsparfumsComponent,
    ParfumsComponent,
    AjouterParfumComponent,
    AjoutermaquillageComponent,
    DetailsmaquillagesComponent,
    AjouterproduitssoinsComponent,
    DetailsproduitssoinsComponent,
    DetailproduithygieneComponent,
    AjouterproduitshygienesComponent,
    ModifierparfumComponent,
    ModifiermaquillageComponent,
    ModifierproduitsoinComponent,
    ModifierproduithygieneComponent,
    ModifiermotpassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
