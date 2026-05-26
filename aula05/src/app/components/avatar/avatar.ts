import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  nome: string = 'Tony';
  //  nome2:string = `20`;
  //  nome3:string = 'true';

  logout() {
    // throw new Error('Method not implemented.');
    console.log('deslogou');
  }
}
