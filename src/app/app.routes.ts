import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TransactionsComponent } from './pages/transactions-component/transactions-component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',component: Home},
    { path: 'transactions',component: TransactionsComponent}
];
