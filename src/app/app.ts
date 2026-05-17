import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from "./core/layout/components/drawer-component/drawer-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrawerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fintrack');
}
