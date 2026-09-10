import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-tabs',
  imports: [],
  templateUrl: './auth-tabs.html',
  styleUrl: './auth-tabs.scss',
})
export class AuthTabs {
  private router = inject(Router)
  @Input({required: true}) page!: string;

  navigateTo(route: string){
    this.router.navigate([route])
  }

}
