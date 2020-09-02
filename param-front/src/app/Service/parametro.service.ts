import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parametro } from '../Modelo/Parametro';

@Injectable()
export class ParametroService {

  constructor(private http:HttpClient, private headers:HttpHeaders) { }

  Url='http://localhost:8080/param';

  getParametros(){
    return this.http.get<Parametro[]>(this.Url);
  }
  createParametro(parametro:Parametro){
    return this.http.post<Parametro>(this.Url,parametro);
  }
  getParametroId(codent:String,centalta:String,producto:String,subprodu:String,condpro:String){
    let complemento: String = " ";
    return this.http.get<Parametro>(this.Url+"/"+codent+centalta+producto+subprodu+complemento+condpro);
  }
  updateParametro(parametro:Parametro){
      return this.http.put<Parametro>(this.Url,parametro);
  }
  deleteParametro(codent:String,centalta:String,producto:String,subprodu:String,condpro:String){
    let complemento: String = " ";
    return this.http.delete<Parametro>(this.Url+"/"+codent+centalta+producto+subprodu+complemento+condpro);
  }

}
