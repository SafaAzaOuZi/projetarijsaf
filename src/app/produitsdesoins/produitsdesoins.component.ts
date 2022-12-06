import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Produitssoins } from '../produitssoins';
import { ProduitssoinsService } from '../produitssoins.service';

@Component({
  selector: 'app-produitsdesoins',
  templateUrl: './produitsdesoins.component.html',
  styleUrls: ['./produitsdesoins.component.css']
})
export class ProduitsdesoinsComponent implements OnInit {
// naaml tab nsamih nafes  l esm li hatytou fl boucle fl template w naaty esm lel formulaire kima nheb ena
  lesprod:Produitssoins[];
  prodForm:FormGroup;
  val:any;

  rechercheForm=new FormGroup(
    { textRech : new FormControl('')
    });
//fel constructor dima   naayt lel service ta l composant li nekhdem fyh w maah service l formulaire 
  constructor(private  produitssoinsService: ProduitssoinsService, private formBuilder:FormBuilder) { }
//afficher produit
afficherProduit(){
  this.produitssoinsService.getProduitssoins().subscribe( data => this.lesprod = data)
  }
//ajouter produit   
  onAjouter(){
    this.produitssoinsService.addProduitssoins(this.prodForm.value).subscribe(data => console.log(data));
    }

  ngOnInit(): void {
    this.afficherProduit();

    this.prodForm = this.formBuilder.group(
      {nom:'', photo:'', prix:0, nouveau:true, dateCreation:'', categorie:'', typeProduit:'', marque:'' } )   
  }

  // supprimer produit de soin
  onSupprimer(id:number){
    this.produitssoinsService.deleteProduitssoins(id).subscribe();
    // pour actualiser la page par déf  ut
    window.location.reload();
     }
  // modifier un roduit de soin 
    onModifier(id:number){
      this.produitssoinsService.updateProduitssoins(id,this.prodForm.value).subscribe(data=>console.log(data));
      //actualiser la page par défaut
      window.location.reload();
       }
  }

