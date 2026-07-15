import { Injectable } from '@angular/core';
import { Auth, getAuth } from 'firebase/auth';
import { app } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth: Auth;

  constructor() {
    this.auth = getAuth(app);
  }
}
