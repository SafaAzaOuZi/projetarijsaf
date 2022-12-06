import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maquillage } from '../maquillage';
import { MaquillageService } from '../maquillage.service';
@Component({
  selector: 'app-detailsmaquillages',
  templateUrl: './detailsmaquillages.component.html',
  styleUrls: ['./detailsmaquillages.component.css']
})
export class DetailsmaquillagesComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute, private maquillageService:MaquillageService) { }
  identifiant:number;
  detail:Maquillage;
  id:number ;
  ngOnInit(): void {
    //let i= this.activatedRoute.snapshot.params['id'];
   //console.log(this.parfumService.getParfumByid(i));
   //this.unParfum= this.parfumService.getParfumByid(i);
   this.identifiant = this.activatedRoute.snapshot.params['id'];
   this.maquillageService.getMaquillageByid(this.identifiant).subscribe((data)=>(this.detail=data))
  }}