import { Component, inject, Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation-item',
  imports: [],
  templateUrl: './navigation-item.html',
  styleUrl: './navigation-item.scss',
})
export class NavigationItem {
private router = inject(Router)
@Input({required: true}) title!: string;
@Input({required: true}) routeName!: string;

navigateTo(){
  this.router.navigate([this.routeName])
}
}
