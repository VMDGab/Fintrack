import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-item',
  imports: [],
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.scss',
})
export class TransactionItem {
  @Input({required: true}) date!: string;
  @Input({required: true}) category!: string;
  @Input({required: true}) desc!: string;
  @Input({required: true}) type!: string;
  @Input({required: true}) amount!: string;
}
