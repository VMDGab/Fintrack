import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from "./core/layout/components/drawer-component/drawer-component";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrawerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  auth = inject(AuthService)
  protected readonly title = signal('fintrack');
}
