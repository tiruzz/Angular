import { Routes } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';
import { HomeComponent } from './home/home.component';
import { InformazioniComponent } from './informazioni/informazioni.component';

export const routes: Routes = [
{path: 'Home', component: HomeComponent},
{path: 'Mostre', component: MostreComponent},
{path: 'Dettagli/:id', component: InformazioniComponent },
{path: '', redirectTo: '/Home', pathMatch: 'full' }
];
