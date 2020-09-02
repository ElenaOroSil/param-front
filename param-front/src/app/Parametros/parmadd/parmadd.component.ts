import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParametroService } from 'src/app/Service/parametro.service';
import { Parametro } from 'src/app/Modelo/Parametro';

@Component({
  selector: 'app-parmadd',
  templateUrl: './parmadd.component.html',
  styleUrls: ['./parmadd.component.css']
})
export class ParmaddComponent implements OnInit {
  parametro:Parametro = new Parametro();
  constructor(private service: ParametroService, private router: Router) {}
 // constructor() { }

  ngOnInit(): void {
  }

  Guardarparm(){
  /*  set: this.parametro.codent = " ";
    set: this.parametro.centalta = " ";
    set: this.parametro.producto = " ";
    set: this.parametro.subprodu = " ";
    set: this.parametro.condpro = " ";
    set: this.parametro.codcam = " ";*/
    set: this.parametro.codconven = " ";
    set: this.parametro.codpromo = " ";
    set: this.parametro.numper = " ";
    set: this.parametro.numperaval = " ";
    set: this.parametro.indctaemp = " ";
    set: this.parametro.indnomemp = 0;
    set: this.parametro.nombreemp = " ";
    set: this.parametro.codregimen = 0;
    set: this.parametro.forpago = 0;
    set: this.parametro.indsitcta = 0;
    set: this.parametro.grupoliq = 0;
    set: this.parametro.grupocuo = 0;
    set: this.parametro.ofiven = " ";
    set: this.parametro.clamon1 = 0;
    set: this.parametro.limcrecta1 = 0;
    set: this.parametro.impfpagoa1 = 0;
    set: this.parametro.limcrecom1 = 0;
    set: this.parametro.limcrecomg1 = 0;
    set: this.parametro.clamon2 = 0;
    set: this.parametro.limcrecta2 = 0;
    set: this.parametro.impfpagoa2 = 0;
    set: this.parametro.limcrecom2 = 0;
    set: this.parametro.limcrecomg2 = 0;
    set: this.parametro.ctacargo1 = " ";
    set: this.parametro.clamoncon1 = 0;
    set: this.parametro.inddomcarcre = " ";
    set: this.parametro.codformato = " ";
    set: this.parametro.ctadomtar1 = " ";
    set: this.parametro.monctatar1 = 0;
    set: this.parametro.indactpas1 = " ";
    set: this.parametro.ctadomtar2 = " ";
    set: this.parametro.monctatar2 = 0;
    set: this.parametro.indactpas2 = " ";
    set: this.parametro.numpertar = " ";
    set: this.parametro.calparttar = " ";
    set: this.parametro.indtipttar = 0;
    set: this.parametro.codmartar = 0;
    set: this.parametro.nombenredtar = " ";
    set: this.parametro.idempleadotar = " ";
    set: this.parametro.panasoctar = " ";
    set: this.parametro.codbarrastar = 0;
    set: this.parametro.reffototar = " ";
    set: this.parametro.estplastar1 = " ";
    set: this.parametro.estplastar2 = " ";
    set: this.parametro.idenvesttar = " ";
    set: this.parametro.centesttar = " ";
    set: this.parametro.indenvpintar = " ";
    set: this.parametro.centpintar = " ";
    set: this.parametro.condesttar = " ";
    set: this.parametro.codpromotar = " ";
    set: this.parametro.clamon1tar = 0;
    set: this.parametro.limdiacaj1tar = 0;
    set: this.parametro.maxdiacaj1tar = 0;
    set: this.parametro.clamon2tar = 0;
    set: this.parametro.limdiacaj2tar = 0;
    set: this.parametro.maxdiacaj2tar = 0;
    set: this.parametro.cuenta = " ";
    set: this.parametro.desclamon = " ";
    set: this.parametro.fecalta = " ";
    set: this.parametro.pantar = " ";
    set: this.parametro.fecaltatar = " ";
    set: this.parametro.feccadtar = 0;
    set: this.parametro.desmarredtar = " ";
    set: this.parametro.destiptredtar = " ";
    set: this.parametro.indsittartar = 0;
    set: this.parametro.dessittartar = " ";
    set: this.parametro.feccobcuo = 0;
    set: this.parametro.desclamon1 = " ";
    set: this.parametro.desclamon2 = " ";
    set: this.parametro.contcur = " ";
    set: this.parametro.nsecficcab = 0;
    set: this.parametro.tipocintacab = 0;
    set: this.parametro.numregtotcab = 0;
    set: this.parametro.edocintacab = " ";
    set: this.parametro.validacioncab = " ";
    set: this.parametro.nsecficdet = 0;
    set: this.parametro.tipocintadet = 0;
    set: this.parametro.indcampoinfodet = " ";
    set: this.parametro.tipobonc1 = " ";
    set: this.parametro.resemiext = " ";
    set: this.parametro.indpercuo = " ";
    set: this.parametro.nummestot = 0;
    set: this.parametro.numfacsc = 0;
    set: this.parametro.seqplastico = 0;
    set: this.parametro.tipobont1 = " ";
    set: this.parametro.indactlim = " ";
    set: this.parametro.indcamlim = " ";
    set: this.parametro.visaphone = 0;
    set: this.parametro.indfoto = " ";
    set: this.parametro.maxoper = 0;
    set: this.parametro.maxodia = 0;
    set: this.parametro.indcta = " ";
    set: this.parametro.indajena = " ";
    set: this.parametro.indtipcta = " ";
    set: this.parametro.cccproduc = " ";
    set: this.parametro.cccsubpro = " ";
    set: this.parametro.nsecficfin = 0;
    set: this.parametro.tipocintafin = 0;
    set: this.parametro.edocintafin = " ";
    set: this.parametro.validacionfin = " ";
    set: this.parametro.limcretar = 0;
    set: this.parametro.limcremes = 0;
    set: this.parametro.limdebmes = 0;
    set: this.parametro.limcredia = 0;
    set: this.parametro.limdebdia = 0;
    
    this.service.createParametro(this.parametro)
    .subscribe(data=>{
      alert("Se Agrego el parámetro con Exito...!!!");
      this.router.navigate(["listarparm"]);
    })
  }

}
