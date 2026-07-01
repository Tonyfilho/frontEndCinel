import { Component } from '@angular/core';
import { IUtilizador } from '../../shared/i-utilizador';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FakeBack } from '../../service/fake-back';

type LocalError = { errorAsync: boolean; errorNome: string };

@Component({
  selector: 'app-assync-tables',
  imports: [CommonModule],
  templateUrl: './assync-tables.html',
  styleUrl: './assync-tables.css',
})
export class AssyncTables {
  ///utilizador Promise/then&catch
  localUserPromise: IUtilizador[] = [];

  ///utilizador com async await
  localUserAsyncPromise: IUtilizador[] = [];

  ///utilizador com Observable
  localUserObservable$: Observable<IUtilizador[]>;

  /// criação das variaveis de error
  errorPromise: LocalError = { errorAsync: false, errorNome: '' };
  errorAsyncAwaitPromise: LocalError = { errorAsync: false, errorNome: '' };
  errorObservable: LocalError = { errorAsync: false, errorNome: '' };

  ///falaremos sobre DI ou Injeção de Depedência
  constructor(protected fakeBack: FakeBack) {
    this.localUserObservable$ = fakeBack.getUtilizadoresObservable();

    ///invocando o metodo de promise
    this.carregarPromise();
  }

  carregarPromise = () => {
    this.fakeBack
      .getUtilizadorsPromise()
      .then((res: IUtilizador[]) => {
        console.log('Nosso Result: ', res);
        return (this.localUserAsyncPromise = res);
      })
      .catch((e) => {
        console.error('Nosso Error: ', e);
        this.errorPromise = {errorAsync: true, errorNome: "Error no carregarPromise(): "+ e};
      });
  };

  carregarAsyncAwaitPromise() {
    
  }

  carregarObservable = () => {};
} /// endclass
