import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViaggiComponent } from './viaggi/viaggi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViaggiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercizio8';
}
