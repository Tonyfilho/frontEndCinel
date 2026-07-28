import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Avatar } from '../avatar/avatar';
import { User } from 'firebase/auth';
import { AuthStateService } from '../../service/auth-state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Avatar, AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 protected localUser$: Observable<User | null>;

  constructor(private authStateService: AuthStateService) {
    this.localUser$ = authStateService.getUser();
  }
}
