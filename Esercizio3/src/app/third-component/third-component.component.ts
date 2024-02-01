import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'third-component',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {
likes:number=0;

likeChecker(): string{
  if(this.likes<33){
    return "primary";
  }
  else if (this.likes>=33 && this.likes<66){
    return "accent";
  }
  else{
    return "warn";
  }
}

constructor(){
  this.likes = Math.floor(Math.random() * 100);
  this.likeChecker();
}

clickBottone(){
  this.likes= this.likes + 1;
  this.likeChecker();
}

  
}
