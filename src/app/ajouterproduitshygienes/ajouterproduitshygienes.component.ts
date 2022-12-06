import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduitshygienesService } from '../produitshygienes.service';
@Component({
  selector: 'app-ajouterproduitshygienes',
  templateUrl: './ajouterproduitshygienes.component.html',
  styleUrls: ['./ajouterproduitshygienes.component.css']
})
export class AjouterproduitshygienesComponent implements OnInit {
prodhForm:FormGroup;
  constructor(private produitshygienesService:ProduitshygienesService, private formBuilder:FormBuilder) { }
  onAjouter(){
    this.produitshygienesService.addProduitshygienes(this.prodhForm.value) .subscribe(data => console.log(data));
    // pour initialiser le formulaire de zero 
    this.prodhForm.reset();
    // pour actualiser la page 
    window.location.reload();
    }
  ngOnInit(): void {
    this.prodhForm = this.formBuilder.group(
      { nom:'' ,photo:'', nouveau:true, prix:"", dateCreation:'', categorie:'', typeProduit:'', marque:'' } )
    }
}
