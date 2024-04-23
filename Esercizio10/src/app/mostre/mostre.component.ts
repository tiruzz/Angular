import { Component } from '@angular/core';
import { OpereService } from '../opere.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {

  constructor(public Opere: OpereService){

  }

  metodoCambio(id: any){
    window.location.href = '/Dettagli/' + id;
  }

  
}
