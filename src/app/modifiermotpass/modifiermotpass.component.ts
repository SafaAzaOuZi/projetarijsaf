import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { User } from '../user';

@Component({
  selector: 'app-modifiermotpass',
  templateUrl: './modifiermotpass.component.html',
  styleUrls: ['./modifiermotpass.component.css']
})
export class ModifiermotpassComponent implements OnInit {
  seconnecterForm: FormGroup;
  admin:User[];
//text=AdminService[1];
  constructor(private adminService:AdminService,private router:Router,private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.afficherAdmin();
    this.seconnecterForm = this.formBuilder.group(
      {
      nom:['', [Validators.required,Validators.minLength(6)]],
      password:['', [Validators.required,Validators.minLength(6)]],
    }
    )
  }
  afficherAdmin(){
    this.adminService.getAdmin().subscribe( data => this.admin = data)
    }
    onSubmit(){
      console.log(this.seconnecterForm.value['nom']);
    }
    onModifier(id:number){
      this.adminService.updateAdmin(id, this.seconnecterForm.value)
      .subscribe(data => console.log(data));
      }
    /* Définition de l'accesseur du FormControl password*/
    get password(){
      return this.seconnecterForm.get('password');
      }
}
