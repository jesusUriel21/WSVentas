import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Cliente } from '../models/cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


const httpOption ={
  headers: new HttpHeaders({
     'Contend-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})


export class ApiclienteService {

    url: string = 'https://localhost:44395/api/cliente'


  constructor(private _http: HttpClient) { 
  }

  getClientes(): Observable<Response> {
    return this._http.get<Response>(this.url);
    
  }
     add(cliente: Cliente): Observable<Response> {
      return this._http.post<Response>(this.url, cliente, httpOption);
  }

    edit(cliente: Cliente): Observable<Response> {
    return this._http.put<Response>(this.url , cliente, httpOption);
  }

   delete(id: number): Observable<Response> {
    return this._http.delete<Response>(`${this.url}/${id}`);
  }

}