import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../commentaire';
import { Produitssoins } from '../produitssoins';
import { ProduitssoinsService } from '../produitssoins.service';

@Component({
  selector: 'app-detailsproduitssoins',
  templateUrl: './detailsproduitssoins.component.html',
  styleUrls: ['./detailsproduitssoins.component.css']
})
export class DetailsproduitssoinsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder, private ProduitssoinsService:ProduitssoinsService) { }
  identifiant:number;
  detail:Produitssoins;
  id:number ;
  form:FormGroup;
  prods:Produitssoins;
  pubcommentaire:Commentaire;
  ngOnInit(): void {
    //let i= this.activatedRoute.snapshot.params['id'];
   //console.log(this.parfumService.getParfumByid(i));
   //this.unParfum= this.parfumService.getParfumByid(i);
   this.identifiant = this.activatedRoute.snapshot.params['id'];
   this.ProduitssoinsService.getProduitssoinsByid(this.identifiant).subscribe((data)=>(this.detail=data))
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
