import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  poke = "start";
  mostra: number = 0;
  
  setTew(nome: string){
    if(nome == "Bulbasaur" ) {
      this.poke = "Bulbasaur"
    }
    if(nome == "Charmander" ) {
      this.poke = "Charmander"
    }
    if(nome == "Squirtle" ) {
      this.poke = "Squirtle"
    }
    if(nome == "Chikorita" ) {
      this.poke = "Chikorita"
    }
    if(nome == "Cyndaquil" ) {
      this.poke = "Cyndaquil"
    }
    if(nome == "Totodile" ) {
      this.poke = "Totodile"
    }
    
    
  }
  pokemon =[
    //prima generazione
    {immagine:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", nome:"Bulbasaur", numero:"#0001", colore: "verde", altezza:"0,7m ", categoria:"Seme", abilita:"Erbaiuto", peso:"6.9kg"},
    {immagine:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", nome:"Charmander", numero:"#0004", colore: "rosso", altezza:"0,6 m", categoria:"Lucertola", abilita:"Aiutofuoco", peso:"8,5 kg"},
    {immagine:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", nome:"Squirtle", numero:"#0007", colore: "blu", altezza:"0,5 m", categoria:"Tartaghina", abilita:"Acquaiuto", peso:"9,0 kg"},
    //seconda generazione
    {immagine:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png", nome:"Chikorita",numero:"#0152", colore: "verde", altezza:"0,9 m", categoria:"Foglia", abilita:"Erbaiuto", peso:"6,4 kg"},
    {immagine:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png", nome:"Cyndaquil",numero:"#0155", colore: "rosso", altezza:"0,5 m", categoria:"Fuocotopo", abilita:"Aiutofuoco", peso:"7,9 kg"},
    {immagine:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png", nome:"Totodile",numero:"#0158", colore: "blu", altezza:"0,6 m", categoria:"Mascellone", abilita:"Acquaiuto", peso:"9,5 kg"},
  ]
  isCollapsed: { [key: string]: boolean } = {};

  toggleCollapse(carta: string) {
    this.isCollapsed[carta] = !this.isCollapsed[carta];
  }
}
