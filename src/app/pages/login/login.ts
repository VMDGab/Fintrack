import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTabs } from '../../features/components/auth-tabs/auth-tabs';
import { InputComponent } from '../../features/components/input/input';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [AuthTabs, InputComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  errorMessage = '';

  login(event: SubmitEvent): void {
    event.preventDefault();
    this.errorMessage = '';

    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['home']),
      error: () => {
        this.errorMessage = 'Não foi possível entrar. Verifique suas credenciais.';
      },
    });
  }
}
