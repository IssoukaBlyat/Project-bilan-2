import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: '',title: 'Acceuil', component: HomeComponent},
    {path: 'detail/:id',title: 'Détail', component: DetailComponent},
    {path: 'liste/:id',title: 'Liste', component: ListeComponent},
    {path: '**',title: 'Erreur 404', component: ErrorComponent},
];
