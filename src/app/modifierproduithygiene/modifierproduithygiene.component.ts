import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produitshygienes } from '../produitshygienes';
import { ProduitshygienesService } from '../produitshygienes.service';

@Component({
  selector: 'app-modifierproduithygiene',
  templateUrl: './modifierproduithygiene.component.html',
  styleUrls: ['./modifierproduithygiene.component.css']
})
export class ModifierproduithygieneComponent implements OnInit {
  prodhForm:FormGroup;
  //lesPar:Parfum[];
  constructor(private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private produitshygienesService:ProduitshygienesService) { }
  identifiant:number;
  detail:Produitshygienes;
  id:number ;
  ngOnInit(): void {
  this.prodhForm=this.formBuilder.nonNullable.group({photo:[""],nom:[""],prix:[""],nouveau:[""],dateCreation:[""],categorie:[""],typeProduit:[""],marque:[""]});
  //let i= this.activatedRoute.snapshot.params['id'];
  //console.log(this.parfumService.getParfumByid(i));
  //this.unParfum= this.parfumService.getParfumByid(i);
  this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.produitshygienesService.getProduitshygienesByid(this.identifiant).subscribe((data)=>{this.prodhForm=this.formBuilder.nonNullable.group({photo:[data.photo],nom:[data.nom],prix:[data.prix],nouveau:[data.nouveau],dateCreation:[data.dateCreation],categorie:[data.categorie],typeProduit:[data.typeProduit],marque:[data.marque]});});
  }
  onModifier(id:number){
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.produitshygienesService.updateProduitshygienes(this.identifiant,this.prodhForm.value).subscribe(data=>this.prodhForm.value);
 //this.parfumForm.reset();
  //actualiser la page par défaut
   //window.location.reload();
  }
}