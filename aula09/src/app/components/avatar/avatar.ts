import { Component } from '@angular/core';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  localNome: string = 'Tony';
  localImage!:string;
  localUser!: User;


  logout() {
    // throw new Error('Method not implemented.');
    console.log('deslogou');
  }
}
