import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { Maquillage } from '../maquillage';
import { MaquillageService } from '../maquillage.service';

@Component({
  selector: 'app-maquillages',
  templateUrl: './maquillages.component.html',
  styleUrls: ['./maquillages.component.css']
})
export class MaquillagesComponent implements OnInit {
  lesMaq:Maquillage[];
  maquillageForm:FormGroup;
  val:any;

  rechercheForm=new FormGroup(
    { textRech : new FormControl('')
    });

  constructor(private maquillageService:MaquillageService, private formBuilder:FormBuilder) { }

  afficherMaquillages(){
    this.maquillageService.getMaquillages().subscribe( data => this.lesMaq = data)
    }
    
    onAjouter(){
      this.maquillageService.addMaquillage(this.maquillageForm.value).subscribe(data => console.log(data));
      }


  ngOnInit(): void {
    // this.lesPar=this.parfumService.getParfum();
    this.afficherMaquillages();

    this.maquillageForm = this.formBuilder.group(
      {nom:'', photo:'', prix:0, nouveau:true, dateCreation:'', categorie:'', typeProduit:'', marque:'' } )   
  }
  onSupprimer(id:number){
    this.maquillageService.deleteMaquillage(id).subscribe();
    window.location.reload();
  }
    onModifier(id:number){
      this.maquillageService.updateMaquillage(id,this.maquillageForm.value).subscribe(data=>console.log(data));
      window.location.reload();
    }
}
