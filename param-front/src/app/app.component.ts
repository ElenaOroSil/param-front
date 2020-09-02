import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'satmenu';
  constructor(private router:Router){}

  Listarparametro(){
    this.router.navigate(["listarparm"]);
  }
  Nuevoparametro(){
    this.router.navigate(["addparm"]);
  }
}
