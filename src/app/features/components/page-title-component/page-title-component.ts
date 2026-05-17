import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title-component',
  imports: [],
  templateUrl: './page-title-component.html',
  styleUrl: './page-title-component.scss',
})
export class PageTitleComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) subtitle!: string;

}
