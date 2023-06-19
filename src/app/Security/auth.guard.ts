import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot} from "@angular/router";
import { ApiauthService } from "../services/apiauth.service";

@Injectable({providedIn: 'root'})

export class AuthGuard{

  constructor(private router: Router, private apiauthService: ApiauthService){

  } 

  canActivate(router: ActivatedRouteSnapshot){
    const usuario = this.apiauthService.usuarioData;

    if(usuario){
       return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
  
}