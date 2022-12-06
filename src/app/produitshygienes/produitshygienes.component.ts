import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Produitshygienes } from '../produitshygienes';
import { ProduitshygienesService } from '../produitshygienes.service';

@Component({
  selector: 'app-produitshygienes',
  templateUrl:'./produitshygienes.component.html',
  styleUrls: ['./produitshygienes.component.css']
})
export class ProduitshygienesComponent implements OnInit {
    // naaml tab nsamih nafes  l esm li hatytou fl boucle fl template w naaty esm lel formulaire kima nheb ena
      lesprodh:Produitshygienes[];
      prodhForm:FormGroup;
      val:any;

      rechercheForm=new FormGroup(
        { textRech : new FormControl('')
        });
    //fel constructor dima   naayt lel service ta l composant li nekhdem fyh w maah service l formulaire 
      constructor(private  produitshygienesService: ProduitshygienesService, private formBuilder:FormBuilder) { }
    //afficher produit
    afficherProduit(){
      this.produitshygienesService.getProduitshygienes().subscribe( data => this.lesprodh = data)
      }
    //ajouter produit   
      onAjouter(){
        this.produitshygienesService.addProduitshygienes(this.prodhForm.value).subscribe(data => console.log(data));
        }
    
      ngOnInit(): void {
        this.afficherProduit();
    
        this.prodhForm = this.formBuilder.group(
          {nom:'', photo:'', prix:0, nouveau:true, dateCreation:'', categorie:'', typeProduit:'', marque:'' } )   
      }
      // supprimer produit de soin
      onSupprimer(id:number){
        this.produitshygienesService.deleteProduitshygienes(id).subscribe();
        // pour actualiser la page par déf  ut
        window.location.reload();
         }
      // modifier un roduit de soin 
        onModifier(id:number){
          this.produitshygienesService.updateProduitshygienes(id,this.prodhForm.value).subscribe(data=>console.log(data));
          //actualiser la page par défaut
          window.location.reload();
           }
      }
    
    