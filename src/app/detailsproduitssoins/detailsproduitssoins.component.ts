import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produitssoins } from '../produitssoins';
import { ProduitssoinsService } from '../produitssoins.service';

@Component({
  selector: 'app-detailsproduitssoins',
  templateUrl: './detailsproduitssoins.component.html',
  styleUrls: ['./detailsproduitssoins.component.css']
})
export class DetailsproduitssoinsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private ProduitssoinsService:ProduitssoinsService) { }
  identifiant:number;
  detail:Produitssoins;
  id:number ;
  ngOnInit(): void {
    //let i= this.activatedRoute.snapshot.params['id'];
   //console.log(this.parfumService.getParfumByid(i));
   //this.unParfum= this.parfumService.getParfumByid(i);
   this.identifiant = this.activatedRoute.snapshot.params['id'];
   this.ProduitssoinsService.getProduitssoinsByid(this.identifiant).subscribe((data)=>(this.detail=data))
  }}
