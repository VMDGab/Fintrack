import { Component, Input } from '@angular/core';
import { TransactionItem } from "../../../../features/components/transaction-item/transaction-item"
import {TransactionDTO} from "../../models/transaction.dto"
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common'
import { ListButton } from "../list-button/list-button";

@Component({
  selector: 'app-transaction-list',
  imports: [TransactionItem, AsyncPipe, CommonModule, ListButton],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.scss',
})
export class TransactionList {
  @Input({required: true}) transactions!: Observable<TransactionDTO[]>

}
