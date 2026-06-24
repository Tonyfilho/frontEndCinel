import { Fuctions } from './pages/fuctions/fuctions';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'ebook/interpolacao', pathMatch: 'full' },
  {
    path: 'ebook/interpolacao',
    loadComponent: () =>
      import('./pages/interpolacao/interpolacao').then((ana) => ana.Interpolacao),
  },
  {
    path: 'ebook/interface',
    loadComponent: () =>
      import('./pages/interfaces/interfaces').then((rafael) => rafael.Interfaces),
  },
  {
    path: 'ebook/poo',
    loadComponent: () =>
      import('./pages/poo/poo').then((c) => c.Poo),
  },
  {
    path: 'ebook/fuctions',
    loadComponent: () =>
      import('./pages/fuctions/fuctions').then((c) => c.Fuctions),
  },

  {
    path: '**',
    loadComponent: () => import('./pages/interpolacao/interpolacao').then((c) => c.Interpolacao),
  },
];
