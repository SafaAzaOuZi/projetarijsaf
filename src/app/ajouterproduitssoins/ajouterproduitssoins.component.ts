import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduitssoinsService } from '../produitssoins.service';

@Component({
  selector: 'app-ajouterproduitssoins',
  templateUrl: './ajouterproduitssoins.component.html',
  styleUrls: ['./ajouterproduitssoins.component.css']
})
export class AjouterproduitssoinsComponent implements OnInit {
  // definir le formulaire
  prodForm:FormGroup;
// faire appel dans le constructeur au service et au formulaire 
  constructor(private produitssoinsService:ProduitssoinsService, private formBuilder:FormBuilder) { }
  //ajouter produit
  onAjouter(){
    this.produitssoinsService.addProduitssoins(this.prodForm.value) .subscribe(data => console.log(data));
    // pour initialiser le formulaire de zero 
    this.prodForm.reset();
    // pour actualiser la page 
    window.location.reload();
    }
  ngOnInit(): void {
    this.prodForm = this.formBuilder.group(
      { nom:'' ,photo:'', nouveau:true, prix:"", dateCreation:'', categorie:'', typeProduit:'', marque:'' } )
    }
}

