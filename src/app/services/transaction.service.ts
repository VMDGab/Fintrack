import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../shared/environment';
import { TransactionDTO } from '../core/layout/models/transaction.dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionService{
    constructor(
        private http: HttpClient
    ){}

    public getTransaction(id: string){
        return this.http.get<TransactionDTO[]>(`${environment.baseURL}/v1/transaction/${id}`)
    }
}


