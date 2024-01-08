import { Component } from '@angular/core';

@Component({
  selector: 'second-command',
  standalone: true,
  imports: [],
  templateUrl: './second-command.component.html',
  styleUrl: './second-command.component.css'
})
export class SecondCommandComponent {
  text: string = "secondo";
}
