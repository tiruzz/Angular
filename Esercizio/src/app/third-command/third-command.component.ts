import { Component } from '@angular/core';
import { FourthCommandComponent } from '../fourth-command/fourth-command.component';

@Component({
  selector: 'third-command',
  standalone: true,
  imports: [FourthCommandComponent],
  templateUrl: './third-command.component.html',
  styleUrl: './third-command.component.css'
})
export class ThirdCommandComponent {
  testo: string = "terzo";
}