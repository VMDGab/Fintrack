import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.html',
  styleUrl: './main-button.scss',
})
export class MainButton {
  @Input() title! : string;
  
}
