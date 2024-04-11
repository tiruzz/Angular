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
    {immagine:"https://www.nationalgeographic.it/upload/ngi-hero/mars-globe-valles-marineris-enhanced.jpg", destinazione:" Marte", sistemaSolare:"Sistema Solare", durata:"0,000016 anni luce", spazioPorto:"Cape Canaveral Spaceport, Florida, Terra", partenza:"10 settembre 2024", arrivo:"11 marzo 2025", costo:" $100 milioni"},
    {immagine:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/07/24/11/Kepler69c.jpg?width=1200&height=1200&fit=crop", destinazione:" Kepler-452b", sistemaSolare:"Sistema di Kepler-452", durata:"1,400 anni luce", spazioPorto:"Kennedy Space Center, Florida, Terra", partenza:"5 giugno 2025", arrivo:"12 agosto 4025", costo:" $500 milioni"},
    {immagine:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1662363836.jpg?crop=0.5xw:1xh;center,top&resize=1200:*", destinazione:" Venere", sistemaSolare:"Sistema Solare", durata:"0,00000000052 anni luce", spazioPorto:"Baikonur Cosmodrome, Kazakhstan, Terra", partenza:"20 novembre 2024", arrivo:"22 novembre 2024", costo:" $50 milioni"},
    {immagine:"https://upload.wikimedia.org/wikipedia/commons/3/36/HD_189733b.jpg", destinazione:" HD 189733b", sistemaSolare:"Sistema di HD 189733", durata:"63 anni luce", spazioPorto:"Vandenberg Space Force Base, California, Terra", partenza:"2 aprile 2026", arrivo:"19 maggio 2089", costo:" $1 miliardo"},
    {immagine:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Gliese_581_g.jpg/290px-Gliese_581_g.jpg", destinazione:" Gliese 581g", sistemaSolare:"Sistema di Gliese 581", durata:"20,3 anni luce", spazioPorto:"Spaceport America, New Mexico, Terra", partenza:"15 marzo 2027", arrivo:"27 giugno 2047", costo:" $750 milioni"},
  ]
}
