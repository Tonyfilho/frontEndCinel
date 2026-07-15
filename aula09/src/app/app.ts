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
  constructor(private authStateService: AuthStateService) {}

  ngOnInit(): void {
    this.authStateService.initAuthListener();

    /**Forma de testar se temos dados */
    this.authStateService.getUser().subscribe((user) => {
      console.log('dados do google Auth: ', user);
    });
  }
}
