import { Component } from '@angular/core';
import { PageTitleComponent } from "../../features/components/page-title-component/page-title-component";
import { MainButton } from "../../core/layout/components/main-button/main-button";
import { TransactionList } from "../../core/layout/components/transaction-list/transaction-list";
import { TransactionService } from "../../services/transaction.service";
import { TransactionDTO } from '../../core/layout/models/transaction.dto';
import { Observable, map, of } from 'rxjs';
import { UserDTO } from '../../core/layout/models/user.dto';

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

  ngOnInit(): void {
    const storedUser = sessionStorage.getItem('user_data');

    if (!storedUser) {
      this.transactionsObject = of([]);
      return;
    }

    const user: UserDTO = JSON.parse(storedUser);

    this.transactionsObject = this.service.getTransaction(user.user_id).pipe(
      map((transactions) =>
        transactions.map((transaction) => ({
          ...transaction,
          amount: this.formatAmount(transaction.amount),
        })),
      ),
    );
  }
  formatAmount(amount: string): string {
    return Number(amount).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}

