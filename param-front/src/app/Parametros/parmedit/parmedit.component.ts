import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParametroService } from 'src/app/Service/parametro.service';
import { Parametro } from 'src/app/Modelo/Parametro';

@Component({
  selector: 'app-parmedit',
  templateUrl: './parmedit.component.html',
  styleUrls: ['./parmedit.component.css']
})
export class ParmeditComponent implements OnInit {

  parametro:Parametro = new Parametro();
  constructor(private router: Router, private service: ParametroService) {}
  
  ngOnInit() {
    this.EditarParm();
  }

  EditarParm(){
    let codent=localStorage.getItem("codent");
    let centalta=localStorage.getItem("centalta");
    let producto=localStorage.getItem("producto");
    let subprodu=localStorage.getItem("subprodu");
    let condpro=localStorage.getItem("condpro");
    this.service.getParametroId(codent, centalta, producto, subprodu, condpro)
    .subscribe(data=>{
      this.parametro=data;
    })

  }
  ActualizarParm(parametro:Parametro){
    this.service.updateParametro(parametro)
    .subscribe(data=>{
      this.parametro=data;
      alert("Se actualizó el parámetro con Exito...!!!");
      this.router.navigate(["listarparm"]);
    })
  }
}
