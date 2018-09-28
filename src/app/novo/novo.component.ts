import { Component } from '@angular/core';
import { PedidoVO } from '../vo/vo';

import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent{

  public ped : PedidoVO = new PedidoVO();

  constructor(private http: HttpClient, private router : Router){
  }

  salvar(){

    var valor = 0;

    valor += 1.50 * this.ped.qtdDelicadas;
    valor += 3.00 * this.ped.qtdNormais;
    valor += 5.00 * this.ped.qtdPesadas;

    this.ped.valor = valor;
    this.ped.status = 1;
    this.ped.dataEntrada = new Date();
    
    this.http.post<PedidoVO>("http://localhost:3000/salvar", this.ped).subscribe( 
      () => {
        this.router.navigateByUrl("/lista");
      },

      (error) => {
        alert("Erro ao salvar registro! " + error.message)
      }
    );
  }

  cancelar(){
    this.router.navigateByUrl("/lista");
  }

}
