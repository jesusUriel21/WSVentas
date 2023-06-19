import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Response } from "../models/response";
import { Usuario } from "../models/usuario";
import {map} from 'rxjs/operators';
import { AnyCatcher } from "rxjs/internal/AnyCatcher";
import { Login } from "../models/login";




const httpOption ={
       headers: new HttpHeaders({
       'Contend-Type': 'application/json'
    })
  };
  

@Injectable({providedIn: 'root'})

export class ApiauthService{
    url: string = 'https://localhost:44395/api/User/login'
     
    private usuarioSubject!: BehaviorSubject<Usuario>;
    public usuario: Observable<Usuario>;
   
    public get usuarioData(): Usuario{
      return this.usuarioSubject.value;
    }

    constructor(private http: HttpClient){
      this.usuarioSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario')));
      this.usuario = this.usuarioSubject.asObservable();
    }

    login(login: Login): Observable<Response>
    {
       return this.http.post<Response>(this.url,login, httpOption).pipe(map(res =>
        {
         if(res.exito == 1)
         {
          const user: Usuario = res.data;
          localStorage.setItem('usuario', JSON.stringify(user))
          this.usuarioSubject.next(user)
         }
           return res;
        })
      );
    }

    logout(){
      localStorage.removeItem('usuario');
      this.usuarioSubject.next(null);
    }
}