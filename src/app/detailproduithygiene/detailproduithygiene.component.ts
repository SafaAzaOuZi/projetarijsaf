import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../commentaire';
import { Produitshygienes } from '../produitshygienes';
import { ProduitshygienesService } from '../produitshygienes.service';

@Component({
  selector: 'app-detailproduithygiene',
  templateUrl: './detailproduithygiene.component.html',
  styleUrls: ['./detailproduithygiene.component.css']
})
export class DetailproduithygieneComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder, private produitshygienesService:ProduitshygienesService) { }
  identifiant:number;
  detail:Produitshygienes;
  id:number ;
  pubcommentaire:Commentaire;
  form:FormGroup;
  prodh:Produitshygienes;
  ngOnInit(): void {
    //let i= this.activatedRoute.snapshot.params['id'];
   //console.log(this.parfumService.getParfumByid(i));
   //this.unParfum= this.parfumService.getParfumByid(i);
   this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.produitshygienesService.getProduitshygienesByid(this.identifiant).subscribe((data)=>(this.detail=data))
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