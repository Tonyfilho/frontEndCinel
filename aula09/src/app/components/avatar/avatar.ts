import { Component, inject, input } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthStateService } from '../../service/auth-state';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  // localNome: string = 'Tony';
  // localImage!:string;
  localUserComponentFilho = input<User>();
 private localService = inject(AuthStateService);

  ///@Input("nome da variavel") e @OutPut("nome do metodo ou propriedade")

  logout() {
   this.localService.logout();
  }
}
