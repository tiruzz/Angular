import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lista-giocatori',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-giocatori.component.html',
  styleUrl: './lista-giocatori.component.css'
})
export class ListaGiocatoriComponent {
  persone = [
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper"},
  ];
}
