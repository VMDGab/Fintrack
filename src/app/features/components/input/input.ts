import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) value = '';
  @Input() type: 'email' | 'password' | 'text' = 'text';
  @Input() name = '';
  @Input() autocomplete = '';
  @Output() changeValue = new EventEmitter<string>();

  passwordVisible = false;

  get inputType(): 'email' | 'password' | 'text' {
    return this.type === 'password' && this.passwordVisible ? 'text' : this.type;
  }

  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onValueChange(event: Event): void {
    this.changeValue.emit((event.target as HTMLInputElement).value);
  }
}
