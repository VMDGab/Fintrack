import { Component } from '@angular/core';
import { AuthTabs } from "../../features/components/auth-tabs/auth-tabs";
import { InputComponent } from '../../features/components/input/input';

@Component({
  selector: 'app-sign-up',
 imports: [AuthTabs, InputComponent],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {

}
