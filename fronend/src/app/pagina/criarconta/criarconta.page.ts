import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/requisicao.service';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarcontaPage implements OnInit {
  public cpf:string = '';
  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  ngOnInit() {
  }

  cadastrar(){
    this.requisicao_service.cadastrar({
      cpf:this.cpf,
      nome:'Edilson Bitencourt',
      data_nascimento:'',
      celular:'',
      email:'',
      senha:''
    }).subscribe();
  }
}
