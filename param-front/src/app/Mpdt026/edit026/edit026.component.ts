import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Mpdt026Service} from 'src/app/Service/mpdt026.service';
import { Mpdt026} from 'src/app/Modelo/Mpdt026';

@Component({
  selector: 'app-edit026',
  templateUrl: './edit026.component.html',
  styleUrls: ['./edit026.component.css']
})
export class Edit026Component implements OnInit {

  mpdt026 :Mpdt026 = new Mpdt026();
  constructor(private router:Router,private service:Mpdt026Service) { }

  ngOnInit(): void {
    this.Editar026();  
  }
  Editar026(){
    let codent=localStorage.getItem("codent");
    let codmar=localStorage.getItem("codmar");
    console.log(codent+codmar);
    this.service.getMpdt026Id(codent,codmar)

    .subscribe(data=>{
      this.mpdt026=data;
    })
    }
    Actualizart026(mpdt026:Mpdt026){
      this.service.updateMpdt026(mpdt026)
      .subscribe( data =>{
        this.mpdt026=data;
        alert("Se actualizo con exito");
        this.router.navigate(["lista026"]);
      })
  }


}

