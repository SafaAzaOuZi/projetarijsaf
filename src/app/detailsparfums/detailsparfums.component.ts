import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../commentaire';
import { Parfum } from '../parfum';
import { ParfumService } from '../parfum.service';
@Component({
  selector: 'app-detailsparfums',
  templateUrl: './detailsparfums.component.html',
  styleUrls: ['./detailsparfums.component.css']
})
export class DetailsparfumsComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder, private parfumService:ParfumService) { }
  identifiant:number;
  detail:Parfum;
  id:number;
  form:FormGroup;
  par:Parfum;
  pubcommentaire:Commentaire;
  ngOnInit(): void {
    //let i= this.activatedRoute.snapshot.params['id'];
   //console.log(this.parfumService.getParfumByid(i));
   //this.unParfum= this.parfumService.getParfumByid(i);
   this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.parfumService.getParfumByid(this.identifiant).subscribe((data)=>(this.detail=data))
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