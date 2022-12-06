import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../commentaire';
import { Maquillage } from '../maquillage';
import { MaquillageService } from '../maquillage.service';
@Component({
  selector: 'app-detailsmaquillages',
  templateUrl: './detailsmaquillages.component.html',
  styleUrls: ['./detailsmaquillages.component.css']
})
export class DetailsmaquillagesComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder, private maquillageService:MaquillageService) { }
  identifiant:number;
  detail:Maquillage;
  id:number ;
  form:FormGroup;
  pubcommentaire:Commentaire;
  maq:Maquillage;
  ngOnInit(): void {
    //let i= this.activatedRoute.snapshot.params['id'];
   //console.log(this.parfumService.getParfumByid(i));
   //this.unParfum= this.parfumService.getParfumByid(i);
   this.identifiant = this.activatedRoute.snapshot.params['id'];
   this.maquillageService.getMaquillageByid(this.identifiant).subscribe((data)=>(this.detail=data))
   this.form=this.fb.group({
    nom:[''],
    commentaire:[''],
  })
    }
  onSubmit(){
      this.pubcommentaire=new Commentaire(
      this.form.controls['nom'].value,
      this.form.controls['commentaire'].value,
      )
    console.log(this.pubcommentaire);
  }
    }