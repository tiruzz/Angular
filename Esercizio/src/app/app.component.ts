import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SecondCommandComponent } from './second-command/second-command.component';
import { ThirdCommandComponent } from './third-command/third-command.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SecondCommandComponent, ThirdCommandComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercizio';
  testo: string = "app";
}
