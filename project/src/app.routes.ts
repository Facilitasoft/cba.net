import { Routes } from '@angular/router';
import { ChampionshipComponent } from './components/championship.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: ChampionshipComponent },
  { path: '**', redirectTo: '' }
];