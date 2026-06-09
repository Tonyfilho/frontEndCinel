import { Routes } from '@angular/router';
import { Lacos } from './pages/lacos/lacos';

export const routes: Routes = [
    {path: '', redirectTo: "ebook/welcome", pathMatch: 'full'},
    {path: "ebook/welcome", loadComponent: () => import("./pages/welcome/welcome").then(ana => ana.Welcome)},
    {path: "ebook/lacos", component: Lacos},
    {path: 'ebook/tipo-de-dados', loadComponent: () => import("./pages/tipo-de-dados/tipo-de-dados").then(paulo => paulo.TipoDeDados)},
    {path: "ebook/variaveis" , loadComponent: () => import("./pages/variaveis/variaveis").then(leo => leo.Variaveis)},
    {path: "ebook/operadores" , loadComponent: () => import("./pages/operadores/operadores").then(c => c.Operadores)},
    {path: "ebook/estrutura-de-controles", loadComponent: () => import('./pages/estrutura-de-controles/estrutura-de-controles').then(rafael => rafael.EstruturaDeControles)},


   


    /**ultima rota */
    {path: '**', loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
];
