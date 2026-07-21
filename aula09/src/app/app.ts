import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { AuthStateService } from './service/auth-state';

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private authstateService: AuthStateService) {}
  ngOnInit(): void {
    this.authstateService.initAuthListener();
    /**Forma de teste de dados */
    this.authstateService.getUser().subscribe({
      next: (result) => {
        console.log('Nosso Resulto do Google no App.ts: ', result);
      },
      error: (error) => {
        console.error('Nosso Error no Auth gdo Firebase no App.ts:', error);
      },
      complete: () => {
        console.log('Observable Finalizado no App.ts.');
      },
    });
  }
}
