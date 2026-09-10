import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) icon!: string;
  @Input() type: 'email' | 'password' | 'text' = 'text';
  @Input() name = '';
  @Input() autocomplete = '';

  passwordVisible = false;

  get inputType(): 'email' | 'password' | 'text' {
    return this.type === 'password' && this.passwordVisible ? 'text' : this.type;
  }

  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
