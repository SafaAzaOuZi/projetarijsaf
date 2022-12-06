import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjouterParfumComponent } from './ajouter-parfum/ajouter-parfum.component';
import { AjoutermaquillageComponent } from './ajoutermaquillage/ajoutermaquillage.component';
import { AjouterproduitshygienesComponent } from './ajouterproduitshygienes/ajouterproduitshygienes.component';
import { AjouterproduitssoinsComponent } from './ajouterproduitssoins/ajouterproduitssoins.component';
import { AuthentificationGuard } from './authentification.guard';
import { DetailproduithygieneComponent } from './detailproduithygiene/detailproduithygiene.component';
import { DetailsmaquillagesComponent } from './detailsmaquillages/detailsmaquillages.component';
import { DetailsparfumsComponent } from './detailsparfums/detailsparfums.component';
import { DetailsproduitssoinsComponent } from './detailsproduitssoins/detailsproduitssoins.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { MaquillagesComponent } from './maquillages/maquillages.component';
import { ModifiermaquillageComponent } from './modifiermaquillage/modifiermaquillage.component';
import { ModifiermotpassComponent } from './modifiermotpass/modifiermotpass.component';
import { ModifierparfumComponent } from './modifierparfum/modifierparfum.component';
import { ModifierproduithygieneComponent } from './modifierproduithygiene/modifierproduithygiene.component';
import { ModifierproduitsoinComponent } from './modifierproduitsoin/modifierproduitsoin.component';
import { AproposComponent } from './navbar/apropos/apropos.component';
import { ErreurComponent } from './navbar/erreur/erreur.component';
import { SeconnecterComponent } from './navbar/seconnecter/seconnecter.component';
import { SinscrireComponent } from './navbar/sinscrire/sinscrire.component';
import { ParfumsComponent } from './parfums/parfums.component';
import { ProduitsdesoinsComponent } from './produitsdesoins/produitsdesoins.component';
import { ProduitshygienesComponent } from './produitshygienes/produitshygienes.component';
const routes: Routes = [
{path:'Seconnecter', title:'Seconnecter', component:SeconnecterComponent},//canActivate:[AuthentificationGuard]},
{path:'acceuil', title:'acceuil', component:AcceuilComponent},
{path:'sinscrire', title:'sinscrire', component:SinscrireComponent},
{path:'A propos', title:'A propos', component:AproposComponent},
{path:'Parfums', title:'Parfums', component:ParfumsComponent},
{path:'Maquillages', title:'Maquillages', component:MaquillagesComponent},
{path:'Produitsdesoins', title:'Produitsdesoins', component:ProduitsdesoinsComponent},
{path:'Produitshygienes', title:'Produitshygienes', component:ProduitshygienesComponent},
{path:'listproduit', title:'listproduit', component:ListProduitComponent},
{path:'detailsparfums/:id', component:DetailsparfumsComponent},
{path:'detailsmaquillages/:id', component:DetailsmaquillagesComponent},
{path:'ajouterParfum',component:AjouterParfumComponent},
{path:'ajoutermaquillage',component:AjoutermaquillageComponent},
{path:'ajouterproduitssoins',component:AjouterproduitssoinsComponent},
{path:'detailsproduitssoins/:id', component:DetailsproduitssoinsComponent},
{path:'ajouterproduitshygienes',component:AjouterproduitshygienesComponent},
{path:'detailproduitshygienes/:id', component:DetailproduithygieneComponent},
{path:'modifierparfum/:id',component:ModifierparfumComponent},
{path:'modifiermaquillage/:id',component:ModifiermaquillageComponent},
{path:'modifierproduithygiene/:id',component:ModifierproduithygieneComponent},
{path:'modifierproduitsoin/:id',component:ModifierproduitsoinComponent},
{path:'modifiermotpass',component:ModifiermotpassComponent},
{path:'', redirectTo:'acceuil', pathMatch:'full'},
{path:'**', component:ErreurComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
