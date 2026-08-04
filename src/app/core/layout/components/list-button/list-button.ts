import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-button',
  imports: [],
  templateUrl: './list-button.html',
  styleUrl: './list-button.scss',
})
export class ListButton {
  @Input({required: true}) buttonTitle! : String
}
