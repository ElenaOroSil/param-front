import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mpdt088 } from '../Modelo/mpdt088.model';

@Injectable({
  providedIn: 'root'
})
export class Mpdt088Service {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/mpdt088';

  getMpparamsat(){
    return this.http.get<Mpdt088[]>(this.Url);
  }
  createMpparamsat(data:Mpdt088){
    console.log("data")
    console.log(data)
    return this.http.post<Mpdt088>(this.Url,data);
  }
  getMpparamsatId(codent:String,producto:String, subprodu:String){
    return this.http.get<Mpdt088>(this.Url+"/"+codent+producto+subprodu);
  }
  updateMpparamsat(data:Mpdt088){
      return this.http.put<Mpdt088>(this.Url,data);
  }
  deleteMpparamsat(codent:String,producto:String, subprodu:String){

    console.log(codent+ " " +producto+ " " +subprodu)
    return this.http.delete<Mpdt088
    >(this.Url+"/"+codent+producto+subprodu);
  }
}
