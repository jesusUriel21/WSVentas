import { NgModule } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ApiauthService } from "../services/apiauth.service";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";
import { Login } from "../models/login";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component ({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit{
    
  public loginForm = this.formBuilder.group(
    {email:['', Validators.required], 
    password:['', Validators.required]

    });
    
    /* public loginForm = new FormGroup({
         email: new FormControl(''),
         password: new FormControl('')
      }) ;*/
     
     constructor(
      public apiauthService: ApiauthService, 
      private router: Router,
      private formBuilder:  FormBuilder
      ){
             
       if(this.apiauthService.usuarioData){
                 this.router.navigate(['/home']);
          }
     }

     ngOnInit() 
     {
     
     }
     
     
     login()
     {
      console.log(this.loginForm.value);
      this.apiauthService.login(this.loginForm.value as Login).subscribe(response =>{
        if(response.exito == 1){
            this.router.navigate(['/home']);
        }
      });
     }

}