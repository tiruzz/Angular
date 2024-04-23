import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OpereService } from '../opere.service';

@Component({
  selector: 'app-informazioni',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './informazioni.component.html',
  styleUrl: './informazioni.component.css'
})
export class InformazioniComponent {
  identificatore: any;
  nome: any;
  descrizione: any;
  immagine: any;
  constructor(private route: ActivatedRoute, public provaService: OpereService){
 
  }

  ngOnInit(){
    this.identificatore = this.route.snapshot.paramMap.get('id');
    this.nome = this.provaService.dati[this.identificatore].nome;
    this.descrizione = this.provaService.dati[this.identificatore].descrizione;
    this.immagine = this.provaService.dati[this.identificatore].immagine;
  }
}
