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
    {immagine: "https://staticg.sportskeeda.com/editor/2022/07/8e028-16591877732300-1920.jpg", nUtente: "S1mple", eta: "26", nazionalita: "Ucraino", ruolo: "AWPer", pagina: "https://liquipedia.net/counterstrike/S1mple"},
    {immagine: "https://img-cdn.hltv.org/gallerypicture/pk2b4hbYsTj-OWJCRtPD3a.jpg?auto=compress&ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=473&q=75&w=800&s=33fdce1e4a1a8ce8f67aee8e962b8116", nUtente: "B1t", eta: "21", nazionalita: "Ucraino", ruolo: "Support", pagina: "https://liquipedia.net/counterstrike/B1t"},
    {immagine: "https://cdn.sanity.io/images/6znhzi10/production/b3996f4e7aba149cedeb6dafe40d4015d3144c89-2048x1365.jpg?w=1416&auto=format", nUtente: "W0nderful", eta: "19", nazionalita: "Ucraino", ruolo: "AWPer", pagina: "https://liquipedia.net/counterstrike/W0nderful"},
    {immagine: "https://www.prosettings.com/site/wp-content/uploads/2018/06/b1ad3-csgo.jpg", nUtente: "B1ad3", eta: "37", nazionalita: "Ucraino", ruolo: "Coach", pagina: "https://liquipedia.net/counterstrike/B1ad3"},
    {immagine: "https://sickodds.com/wp-content/uploads/2022/09/FNUyeGfXsAEWnpv.jpg", nUtente: "Aleksib", eta: "26", nazionalita: "Finlandese", ruolo: "Support", pagina: "https://liquipedia.net/counterstrike/Aleksib"},
    {immagine: "https://res.cloudinary.com/pley-gg/image/upload/c_fill,w_900/v1/players/KRIMZ_yafej0", nUtente: "KRIMZ", eta: "29", nazionalita: "Svedese", ruolo: "Support", pagina: "https://liquipedia.net/counterstrike/KRIMZ"},
    {immagine: "https://res.cloudinary.com/pley-gg/image/upload/c_fill,w_900/v1/players/afro_HEET_xvx5be", nUtente: "Afro", eta: "24", nazionalita: "Francese", ruolo: "AWPer", pagina: "https://liquipedia.net/counterstrike/Afro"},
    {immagine: "https://res.cloudinary.com/pley-gg/image/upload/c_fill,w_900/v1/players/Copyright_-_Helena-Kristiansson_-_bodyy_1_m9vmcb", nUtente: "Bodyy", eta: "27", nazionalita: "Francese", ruolo: "Support", pagina: "https://liquipedia.net/counterstrike/Bodyy"},
    {immagine: "https://api.yzone.sk/api/file/cc9ef2a9-7fc8-4ebe-8f06-2de0e6a72053.jpg", nUtente: "Matys", eta: "21", nazionalita: "Slovacco", ruolo: "Support", pagina: "https://liquipedia.net/counterstrike/Matys"},
    {immagine: "https://res.cloudinary.com/pley-gg/image/upload/c_fill,w_900/v1/players/dexter_c4oyy5", nUtente: " Dexter", eta: "29", nazionalita: "Australiano", ruolo: "Coach", pagina: "https://liquipedia.net/counterstrike/Kyuubii"},
  ];
  openExternalPage(url: any) {
    location.href = url;
  }
}