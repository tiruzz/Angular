import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'lista-contatti', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {
  persone = [
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Gianluca ", cognome: "Vacchi", eta: "55", nTelefono: "02-5511153", stato:true, colore: "Rosso"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Ms.Kappa ", cognome: "L'urina", eta: "25", nTelefono: "392-84738834", stato:false, colore: "Arancione"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Uge ", cognome: "Jass", eta: "69", nTelefono: "328-3048279", stato: true, colore: "Grigio"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Francesco ", cognome: "Iodice", eta: "34", nTelefono: "666", stato:false, colore: "Nero"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Cristiano ", cognome: "Verderio", eta: "17", nTelefono: "118", stato: true, colore: "Viola"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Giulia " , cognome: "De Angeli", eta: "18", nTelefono: "1522", stato:false, colore: "Rosa"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Samuele ", cognome: "Lo Fidanzato", eta: "15", nTelefono: "114", stato:false, colore: "Blu"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Lorenzo " , cognome: "L'amante", eta: "18", nTelefono: "112", stato:true, colore: "Verde"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Thomas ", cognome: "Turbato", eta: "20", nTelefono: "420", stato:false, colore: "Giallo"}
  ];
  sfondo = ['#ffe4e1', '#db7093', '#9999ff', '#87ceeb', '#98fb98', '#f0e68c', '#ffa07a', '#f08080', '#cd853f']; // Array di colore da inserire come sfondo
}
