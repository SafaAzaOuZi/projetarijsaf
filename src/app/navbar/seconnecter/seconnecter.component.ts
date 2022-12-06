import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css']
})
export class SeconnecterComponent implements OnInit {
seconnecterForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private adminService:AdminService){ }

  // ngOnInit(): void {
  //   this.seconnecterForm=this.formBuilder.group({
  //     nom:['', [Validators.required,  Validators.minLength(8)]],
  //     mdps:['', [Validators.required, Validators.minLength(6)]]
  //   })
  // }
  ngOnInit(){
  this.seconnecterForm = this.formBuilder.nonNullable.group
    (
      {
        nom:['', Validators.required],
        mdps:['', [Validators.required, Validators.minLength(6)]]
      }
    )
}
admin=["safaarij","safaarijmdp"];
//* Définition de l'accesseur du FormControl id */
get nom(){
  return this.seconnecterForm.get('nom');
  }
  /* Définition de l'accesseur du FormControl libelle */
  get mdps(){
  return this.seconnecterForm.get('mdps');
  }
  //boutton de submit 
onSubmit(){
  this.adminService.getByLogin(this.seconnecterForm.value['nom'],this.seconnecterForm.value['mdps']).subscribe(data=>{
    if(data.nom!="" &&this.seconnecterForm.value['nom'] == this.admin[0] && this.seconnecterForm.value['mdps'] == this.admin[1]){
      window.location.assign("listproduit");
    }
  else{
    alert('Admin incorrect');
  }
  }
  )}
//lien vers la page inscrire 
  Oninscrire(){
    this.router.navigate(['/sinscrire'])
  }
  //lien vers la page produits
  lesproduits(){
    this.router.navigate(['/listproduit'])}
  
}
//  if((data.nom!="" )