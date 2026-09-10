import { Component } from '@angular/core';
import { AuthTabs } from '../../features/components/auth-tabs/auth-tabs';
import { InputComponent } from '../../features/components/input/input';

@Component({
  selector: 'app-login',
  imports: [AuthTabs, InputComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
