import { Component } from '@angular/core';
import { PageTitleComponent } from "../../features/components/page-title-component/page-title-component";
import { MainButton } from "../../core/layout/components/main-button/main-button";
import { TransactionList } from "../../core/layout/components/transaction-list/transaction-list";
import { TransactionService } from "../../services/transaction.service";
import { TransactionDTO } from '../../core/layout/models/transaction.dto';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-transactions-component',
  imports: [PageTitleComponent, MainButton, TransactionList],
  templateUrl: './transactions-component.html',
  styleUrl: './transactions-component.scss',
})

export class TransactionsComponent {

  transactionsObject!: Observable<TransactionDTO[]>;

  constructor(
    private service: TransactionService
  ) {}

  ngOnInit() {
   return this.transactionsObject = this.service.getTransaction().pipe(map(transactions => transactions.map(t =>({
    ...t,
    amount: this.formatAmount(t.amount)
   }))))
}
  formatAmount(amount: string): string {
    return Number(amount).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}


