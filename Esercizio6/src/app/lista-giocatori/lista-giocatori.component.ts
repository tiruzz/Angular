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
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: "https://liquipedia.net/counterstrike/S1mple"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: "https://liquipedia.net/counterstrike/B1t"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: "https://liquipedia.net/counterstrike/W0nderful"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: "https://liquipedia.net/counterstrike/B1ad3"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: "https://liquipedia.net/counterstrike/Aleksib"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: ""},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: ""},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: ""},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: ""},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nUtente: "tiruz", eta: "55", nazionalita: "italiano", ruolo: "sniper", pagina: ""},
  ];
  openExternalPage(url: string) {
    window.open(url, "_blank");
  }
}
