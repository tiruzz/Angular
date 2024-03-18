import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaGiocatoriComponent } from './lista-giocatori/lista-giocatori.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaGiocatoriComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercizio6';
}
