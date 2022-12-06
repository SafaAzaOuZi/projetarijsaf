import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Client } from "src/app/client";
import { ClientService } from "src/app/client.service";
@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.css']
})
export class SinscrireComponent implements OnInit {

  constructor(private clientService:ClientService, private formBuilder:FormBuilder) { }
  clientForm:FormGroup;
  tabClients : Client[]=[];
  onAjouter(){
    this.clientService.addClient(this.clientForm.value).subscribe(data => this.tabClients.push(data));
    // pour initialiser le formulaire de zero 
    this.clientForm.reset();
    // pour actualiser la page 
    window.location.reload();
    window.location.assign("listproduit");
    }
  ngOnInit(): void {
    this.clientForm = this.formBuilder.group(
      {
      nom:['', Validators.required],
      prenom:['', Validators.required],
      email:['', Validators.required,Validators.email],
      password:['', [Validators.required,Validators.minLength(6)]],
      tel:['', [Validators.required, Validators.pattern("(216)[0-9]{8}")]]
      }
    )
  }
  /* Définition de l'accesseur du FormControl nom*/
 get nom(){
  return this.clientForm.get('nom');
  }
  /* Définition de l'accesseur du FormControl prenom*/
  get prenom(){
  return this.clientForm.get('prenom');
  }
/* Définition de l'accesseur du FormControl nom*/
 get email(){
  return this.clientForm.get('email');
  }
  /* Définition de l'accesseur du FormControl prenom*/
  get password(){
  return this.clientForm.get('password');
  }
  /* Définition de l'accesseur du FormControl nom*/
get tel(){
  return this.clientForm.get('tel');
  }
}