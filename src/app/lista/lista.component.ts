import { Component, OnInit } from '@angular/core';
import { PedidoVO } from '../vo/vo';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public listaPedidos : PedidoVO[] = [];

  public totalPesadas : number = 0;
  public totalDelicadas : number = 0;
  public totalNormais : number = 0;

  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.listar();
  }

  private listar(){

    this.http.get<PedidoVO[]>("http://localhost:3000/listar").subscribe(

      // Função a ser executada quando o retorno do servidor for OK
      (retorno) => {
        this.listaPedidos = retorno;
        this.totalizar();
      },

      // Função a ser executada quando houver erro no servidor
      (erro) => {
        alert("Erro no servidor " + erro.message);
      }
    );
  }

  private totalizar(){

    this.listaPedidos.forEach(p => {
      this.totalPesadas += p.qtdPesadas;
      this.totalDelicadas += p.qtdDelicadas;
      this.totalNormais += p.qtdNormais;
    });

  }

  public excluir(id){

    this.http.get("http://localhost:3000/excluir?id=" + id).subscribe(
      (retorno) => {
        this.listar();
      },

      (erro) => {
        alert("Erro no servidor " + erro.message);
      }
    );
}
public alterarStatus(p : PedidoVO, status : number){

  p.status = status;

  this.http.post("http://localhost:3000/atualizar", p).subscribe(
    () => {
        this.listar();
    },

    (erro) => {
        alert("Erro ao atualizar " + erro.message);
    }
  );
}
public setStatus(status: number){
  if(status == 1){
    
  }
}

}
