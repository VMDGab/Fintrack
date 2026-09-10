import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TransactionsComponent } from './pages/transactions-component/transactions-component';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: Login },
    {
        path: "",
        canActivate: [authGuard],
        children: [
            { path: 'home', component: Home },
            { path: 'transactions', component: TransactionsComponent },
        ]
    }
];
