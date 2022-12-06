import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParfumService } from '../parfum.service';
@Component({
  selector: 'app-ajouter-parfum',
  templateUrl: './ajouter-parfum.component.html',
  styleUrls: ['./ajouter-parfum.component.css']
})
export class AjouterParfumComponent implements OnInit {
  // definir le formulaire
  parfumForm:FormGroup;
// faire appel dans le constructeur au service et au formulaire 
  constructor(private parfumService:ParfumService, private formBuilder:FormBuilder) { }
  //ajouter parfum
  onAjouter(){
    this.parfumService.addParfum(this.parfumForm.value) .subscribe(data => console.log(data));
    // pour initialiser le formulaire de zero 
    this.parfumForm.reset();
    // pour actualiser la page 
    window.location.reload();
    }
  ngOnInit(): void {
    this.parfumForm = this.formBuilder.group(
      { nom:'' ,photo:'', nouveau:true, prix:"", dateCreation:'', categorie:'', typeProduit:'', marque:'' } )
    }
}
