import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent { 
  biglietti=[
    {immagine:"https://www.nationalgeographic.it/upload/ngi-hero/mars-globe-valles-marineris-enhanced.jpg", destinazione:" Marte", sistemaSolare:"Sistema Solare", durata:"1,6 x 10^(-5) Anni", spazioPorto:"Cape Canaveral Spaceport, Florida, Terra", partenza:"10/09/2025", arrivo:"11/03/2025", costo:" 630000"},
    {immagine:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/07/24/11/Kepler69c.jpg?width=1200&height=1200&fit=crop", destinazione:" Kepler-452b", sistemaSolare:"Sistema di Kepler-452", durata:"1,4 x 10^(2) Anni", spazioPorto:"Kennedy Space Center, Florida, Terra", partenza:"5/06/2025", arrivo:"12/08/2045", costo:" 5000000"},
    {immagine:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1662363836.jpg?crop=0.5xw:1xh;center,top&resize=1200:*", destinazione:" Venere", sistemaSolare:"Sistema Solare", durata:"5,2 x 10^(-10) Anni", spazioPorto:"Baikonur Cosmodrome, Kazakhstan, Terra", partenza:"11/18/2024", arrivo:"11/20/4024", costo:" 700000"},
    {immagine:"https://upload.wikimedia.org/wikipedia/commons/3/36/HD_189733b.jpg", destinazione:" HD 189733b", sistemaSolare:"Sistema di HD 189733", durata:"6,3 x 10^(1) Anni", spazioPorto:"Vandenberg Space Force Base, California, Terra", partenza:" 4/2/2026", arrivo:" 5/16/2089", costo:" 100000000"},
    {immagine:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Gliese_581_g.jpg/290px-Gliese_581_g.jpg", destinazione:" Gliese 581g", sistemaSolare:"Sistema di Gliese 581", durata:"2,03 x 10^(1) Anni", spazioPorto:"Spaceport America, New Mexico, Terra", partenza:" 3/15/2027", arrivo:" 6/27/2047", costo:" 20000000"},
  ]
}
