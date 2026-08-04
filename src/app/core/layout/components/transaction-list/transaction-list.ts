import { Component, Input } from '@angular/core';
import { TransactionItem } from "../../../../features/components/transaction-item/transaction-item"
import {TransactionDTO} from "../../models/transaction.dto"
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  imports: [TransactionItem, AsyncPipe],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.scss',
})
export class TransactionList {
  @Input({required: true}) transactions!: Observable<TransactionDTO[]>
}
