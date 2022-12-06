import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Parfum } from '../parfum';
import { ParfumService } from '../parfum.service';
@Component({
  selector: 'app-parfums',
  templateUrl: './parfums.component.html',
  styleUrls: ['./parfums.component.css']
})
export class ParfumsComponent implements OnInit {
  lesPar:Parfum[];
  parfumForm:FormGroup;
  val:any;

  rechercheForm=new FormGroup(
    { textRech : new FormControl('')
    });
    
 // lesPar:Observable<Parfum[]>;
//fel constructor dima   naayt lel service ta l composant li nekhdem fyh w maah service l formulaire 
  constructor(private parfumService:ParfumService, private formBuilder:FormBuilder) { }
//afficher parfum
  afficherParfums(){
    this.parfumService.getParfums().subscribe( data => this.lesPar = data)
    }
  //ajouter parfum    
    onAjouter(){
      this.parfumService.addParfum(this.parfumForm.value).subscribe(data => console.log(data));
      }
  ngOnInit(): void {
    //this.lesPar=this.parfumService.getParfum();
    this.afficherParfums();

    this.parfumForm = this.formBuilder.group(
      {nom:'', photo:'', prix:0, nouveau:true, dateCreation:'', categorie:'', typeProduit:'', marque:'' } )   
  }
  // supprimer parfum
  onSupprimer(id:number){
    this.parfumService.deleteParfum(id).subscribe();
    // pour actualiser la page par déf  ut
    window.location.reload();
  }
  // modifier un parfum
    onModifier(id:number){
      this.parfumService.updateParfum(id,this.parfumForm.value).subscribe(data=>console.log(data));
      //this.parfumForm.reset();
      //actualiser la page par défaut
      //window.location.reload();
    }

    
    
  }