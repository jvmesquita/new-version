import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http:HttpClient
  ) { }

  cadastrar(dados:any){
    return this.http.get('http://localhost/futuremoney/backend/cadastro.php',{
      params:dados
    });
  }
}