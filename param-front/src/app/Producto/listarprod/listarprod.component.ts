import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../Service/producto.service';
import { Producto } from '../../Modelo/Producto';

@Component({
  selector: 'app-listarprod',
  templateUrl: './listarprod.component.html',
  styleUrls: ['./listarprod.component.css']
})

export class ListarprodComponent implements OnInit {
  producto: Producto[];
  constructor(private service: ProductoService, private router: Router) { }

  ngOnInit() {
    console.log("Entra init");
    this.service.getProductos()
      .subscribe(data => {
        this.producto = data;
      });
  }

  Nuevoprod() {
    //this.router.navigate(["addprod"]);
  }

  Editprod(producto: Producto): void {
    localStorage.setItem("codent", producto.codent.toString());
    localStorage.setItem("producto", producto.producto.toString());
    localStorage.setItem("subprodu", producto.subprodu.toString());

    this.router.navigate(["editprod"]);
  }

  Deleteprod(producto: Producto) {
    localStorage.setItem("codent", producto.codent.toString());
    localStorage.setItem("producto", producto.producto.toString());
    localStorage.setItem("subprodu", producto.subprodu.toString());

    this.service.deleteProducto(producto.codent.toString(), producto.producto.toString(), producto.subprodu.toString())
      .subscribe(data => {
        this.producto = this.producto.filter(p => p !== producto);
        alert("Producto eliminado...");
      })
  }

}



