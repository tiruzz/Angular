import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  introduction = "home";

  setPaginaProdotti(){
    this.introduction = "prodotti";
  }
  setPaginaHome(){
    this.introduction = "home";
  }
}
