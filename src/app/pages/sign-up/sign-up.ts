import { Component, inject } from '@angular/core';
import { AuthTabs } from "../../features/components/auth-tabs/auth-tabs";
import { InputComponent } from '../../features/components/input/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
 imports: [AuthTabs, InputComponent],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  private router = inject(Router)
  private service = inject(AuthService)

  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  register(): void {
    if(this.password == this.confirmPassword && this.emailValidation.test(this.email)){
      this.service.register(this.username, this.email, this.password).subscribe({
        next: (response) => {
          this.router.navigate(["home"])
        },
        error: (error) => {
          console.error('Erro ao cadastrar', error);
        },
      });
  }
  }

}
