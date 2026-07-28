import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: 'welcome',loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome) },
    {path:'assync-table', loadComponent: () => import('./pages/assync-tables/assync-tables').then(c => c.AssyncTables)},
    {path: "forms", loadComponent: () =>  import("./pages/forms/forms").then(c => c.Forms)},
    {path: "about", loadComponent: () =>  import("./pages/about/about").then(c => c.About)},
    {path:"weather", loadComponent: () => import("./pages/weather/weather").then(c => c.Weather)},




    
    {path: '**', loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)}
];
