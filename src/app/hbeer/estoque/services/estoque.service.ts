import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HBEER_API } from 'src/app/core/app-api';
import { Fornecedor } from '../../models/fornecedor-model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  listarFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${HBEER_API}/v1/fornecedores/listar`);
  }
}
