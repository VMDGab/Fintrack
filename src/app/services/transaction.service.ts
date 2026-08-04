import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../shared/environment';
import { TransactionDTO } from '../core/layout/models/transaction.dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionService{
    constructor(
        private Http: HttpClient
    ){}

    public getTransaction(){
        return this.Http.get<TransactionDTO[]>(`${environment.baseURL}/v1/transaction`)
    }
}


