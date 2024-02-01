import { Component } from '@angular/core';
import { ThirdComponentComponent } from '../third-component/third-component.component';
import { FourthComponentComponent } from '../fourth-component/fourth-component.component';

@Component({
  selector: 'second-component',
  standalone: true,
  imports: [ThirdComponentComponent, FourthComponentComponent],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  Nome=["Nero che pensa", "Personaggio Cartone Animato"]
  Descrizione=["Game award", "ragazzo bello (io)"]
}
