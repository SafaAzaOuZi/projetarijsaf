import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Parfum } from '../parfum';
import { ParfumService } from '../parfum.service';

@Component({
  selector: 'app-modifierparfum',
  templateUrl: './modifierparfum.component.html',
  styleUrls: ['./modifierparfum.component.css']
})
export class ModifierparfumComponent implements OnInit {
  parfumForm:FormGroup;
  //lesPar:Parfum[];
  constructor(private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private parfumService:ParfumService) { }
  identifiant:number;
  detail:Parfum;
  id:number ;
  ngOnInit(): void {
  this.parfumForm=this.formBuilder.nonNullable.group({photo:[""],nom:[""],prix:[""],nouveau:[""],dateCreation:[""],categorie:[""],typeProduit:[""],marque:[""]});
  //let i= this.activatedRoute.snapshot.params['id'];
  //console.log(this.parfumService.getParfumByid(i));
  //this.unParfum= this.parfumService.getParfumByid(i);
  this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.parfumService.getParfumByid(this.identifiant).subscribe((data)=>{this.parfumForm=this.formBuilder.nonNullable.group({photo:[data.photo],nom:[data.nom],prix:[data.prix],nouveau:[data.nouveau],dateCreation:[data.dateCreation],categorie:[data.categorie],typeProduit:[data.typeProduit],marque:[data.marque]});
});
  }
  onModifier(id:number){
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.parfumService.updateParfum(this.identifiant,this.parfumForm.value).subscribe(data=>this.parfumForm.value);
 //this.parfumForm.reset();
  //actualiser la page par défaut
   //window.location.reload();
  }
}