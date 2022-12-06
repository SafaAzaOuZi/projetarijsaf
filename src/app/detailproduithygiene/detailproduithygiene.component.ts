import { Component, OnInit } from '@angular/core';
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

  constructor(private activatedRoute:ActivatedRoute, private produitshygienesService:ProduitshygienesService) { }
  identifiant:number;
  detail:Produitshygienes;
  id:number ;
  com:['']; 
  ngOnInit(): void {
    //let i= this.activatedRoute.snapshot.params['id'];
   //console.log(this.parfumService.getParfumByid(i));
   //this.unParfum= this.parfumService.getParfumByid(i);
   this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.produitshygienesService.getProduitshygienesByid(this.identifiant).subscribe((data)=>(this.detail=data))
  }
  onajouter(){
  console.log(this.com);
  }
}