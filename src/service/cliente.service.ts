import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "../model/cliente";

@Injectable()
export class ClienteService{

    constructor(private http: HttpClient) {}

    getClientes() : Observable<Cliente[]>{
        return this.http.get<Cliente[]>(
            `http://www.mocky.io/v2/5be968592e00008700f14571`
        );
    }

    cadastrar(cliente : Cliente){
        return this.http.post(
            `http://www.mocky.io/v2/5be968592e00008700f14571`,cliente,
            {
             observe: 'response',
             responseType: 'text'   
            }
        );
    }
}