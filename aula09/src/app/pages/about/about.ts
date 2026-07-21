import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthStateService } from '../../service/auth-state';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  user$: Observable<User | null>;
  isLoading = true;
  currentYear = new Date().getFullYear();

  constructor(private authService: AuthStateService) {
    this.user$ = this.authService.getUser();
  }

  ngOnInit(): void {
    // Simula carregamento dos dados
    this.user$.subscribe({
      next: () => {
        this.isLoading = false;
      },
      error: () => {
        ///opção toggle
        this.isLoading = !this.isLoading;
      },
    });
  }

  getInitials(user: User | null): string {
    if (!user) return '?';
    if (user.displayName) {
      const names = user.displayName.split(' ');
      return names.map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    return user.email ? user.email[0].toUpperCase() : '?';
  }

  
}
