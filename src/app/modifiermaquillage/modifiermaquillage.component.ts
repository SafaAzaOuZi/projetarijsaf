import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Maquillage } from '../maquillage';
import { MaquillageService } from '../maquillage.service';

@Component({
  selector: 'app-modifiermaquillage',
  templateUrl: './modifiermaquillage.component.html',
  styleUrls: ['./modifiermaquillage.component.css']
})

export class ModifiermaquillageComponent implements OnInit {
  maquillageForm:FormGroup;
  //lesPar:Parfum[];
  constructor(private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private maquillageService:MaquillageService) { }
  identifiant:number;
  detail:Maquillage;
  id:number ;
  ngOnInit(): void {
  this.maquillageForm=this.formBuilder.nonNullable.group({photo:[""],nom:[""],prix:[""],nouveau:[""],dateCreation:[""],categorie:[""],typeProduit:[""],marque:[""]});
  //let i= this.activatedRoute.snapshot.params['id'];
  //console.log(this.MaquillageService.getParfumByid(i));
  //this.unParfum= this.MaquillageService.getParfumByid(i);
  this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.maquillageService.getMaquillageByid(this.identifiant).subscribe((data)=>{this.maquillageForm=this.formBuilder.nonNullable.group({photo:[data.photo],nom:[data.nom],prix:[data.prix],nouveau:[data.nouveau],dateCreation:[data.dateCreation],categorie:[data.categorie],typeProduit:[data.typeProduit],marque:[data.marque]});});
  }
  onModifier(id:number){
  this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.maquillageService.updateMaquillage(this.identifiant,this.maquillageForm.value).subscribe(data=>this.maquillageForm.value);
 //this.maquillageForm.reset();
  //actualiser la page par défaut
   //window.location.reload();
  }
}