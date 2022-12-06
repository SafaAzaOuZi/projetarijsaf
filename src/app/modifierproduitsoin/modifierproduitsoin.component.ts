import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produitssoins } from '../produitssoins';
import { ProduitssoinsService } from '../produitssoins.service';

@Component({
  selector: 'app-modifierproduitsoin',
  templateUrl: './modifierproduitsoin.component.html',
  styleUrls: ['./modifierproduitsoin.component.css']
})
export class ModifierproduitsoinComponent implements OnInit {
  prodForm:FormGroup;
  //lesPar:Parfum[];
  constructor(private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private produitssoinsService:ProduitssoinsService) { }
  identifiant:number;
  detail:Produitssoins;
  id:number ;
  ngOnInit(): void {
  this.prodForm=this.formBuilder.nonNullable.group({photo:[""],nom:[""],prix:[""],nouveau:[""],dateCreation:[""],categorie:[""],typeProduit:[""],marque:[""]});
  //let i= this.activatedRoute.snapshot.params['id'];
  //console.log(this.parfumService.getParfumByid(i));
  //this.unParfum= this.parfumService.getParfumByid(i);
  this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.produitssoinsService.getProduitssoinsByid(this.identifiant).subscribe((data)=>{this.prodForm=this.formBuilder.nonNullable.group({photo:[data.photo],nom:[data.nom],prix:[data.prix],nouveau:[data.nouveau],dateCreation:[data.dateCreation],categorie:[data.categorie],typeProduit:[data.typeProduit],marque:[data.marque]});
});
  }
  onModifier(id:number){
  this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.produitssoinsService.updateProduitssoins(this.identifiant,this.prodForm.value).subscribe(data=>console.log(this.prodForm.value));
 //this.parfumForm.reset();
  //actualiser la page par défaut
   //window.location.reload();
  }
}