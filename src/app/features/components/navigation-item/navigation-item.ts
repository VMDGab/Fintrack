import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  imports: [],
  templateUrl: './navigation-item.html',
  styleUrl: './navigation-item.scss',
})
export class NavigationItem {
@Input() title!: string;
}
