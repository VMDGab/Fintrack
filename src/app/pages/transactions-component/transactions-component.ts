import { Component } from '@angular/core';
import { PageTitleComponent } from "../../features/components/page-title-component/page-title-component";
import { MainButton } from "../../core/layout/components/main-button/main-button";

@Component({
  selector: 'app-transactions-component',
  imports: [PageTitleComponent, MainButton],
  templateUrl: './transactions-component.html',
  styleUrl: './transactions-component.scss',
})
export class TransactionsComponent {

}
