import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MaquillageService } from '../maquillage.service';

@Component({
  selector: 'app-ajoutermaquillage',
  templateUrl: './ajoutermaquillage.component.html',
  styleUrls: ['./ajoutermaquillage.component.css']
})
export class AjoutermaquillageComponent implements OnInit {
  maquillageForm:FormGroup;
  constructor(private maquillageService:MaquillageService, private formBuilder:FormBuilder) { }
  onAjouter(){
    this.maquillageService.addMaquillage(this.maquillageForm.value) .subscribe(data => console.log(data));
    this.maquillageForm.reset();
     window.location.reload();
    }
  ngOnInit(): void {
    this.maquillageForm = this.formBuilder.group(
      { nom:'' ,photo:'', nouveau:true, prix:0, dateCreation:'', categorie:'', typeProduit:'', marque:'' } )
    }
}
