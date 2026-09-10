import { Component, inject, Input } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-navigation-item',
  imports: [],
  templateUrl: './navigation-item.html',
  styleUrl: './navigation-item.scss',
})
export class NavigationItem {
private router = inject(Router)
private auth = inject(AuthService)
@Input({required: true}) title!: string;
@Input({required: true}) routeName!: string;
@Input() _logout!: boolean

navigateTo(){
  if(this._logout){
    this.auth.logout();
  }

  this.router.navigate([this.routeName]);
}
}
