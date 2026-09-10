import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TransactionsComponent } from './pages/transactions-component/transactions-component';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth.guard';
import { SignUp } from './pages/sign-up/sign-up';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'cadastro', component: SignUp },
    {
        path: "",
        canActivate: [authGuard],
        children: [
            { path: 'home', component: Home },
            { path: 'transactions', component: TransactionsComponent },
        ]
    }
];
