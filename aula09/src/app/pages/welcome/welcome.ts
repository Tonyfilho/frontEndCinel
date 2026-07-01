import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  features = [
    {
      icon: '📝',
      title: 'Formulários Reativos',
      description: 'Criação de formulários com validação em tempo real, campos dinâmicos e submissão assíncrona.'
    },
    {
      icon: '🔄',
      title: 'Dados Assíncronos',
      description: 'Gerenciamento de dados com Observables e Promises, usando operadores RxJS.'
    },
    {
      icon: '📊',
      title: 'Tabelas Dinâmicas',
      description: 'Tabelas com ordenação, filtros, paginação e loading states.'
    }
  ];

  techStack = ['Angular 21', 'RxJS', 'TypeScript', 'Observables', 'Promises', 'Reactive Forms'];

  onGetStarted(): void {
    console.log('Iniciando aplicação...');
  }
}
