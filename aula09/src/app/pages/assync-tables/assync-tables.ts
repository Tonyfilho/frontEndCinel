import { ChangeDetectorRef, Component } from '@angular/core';
import { IUtilizador } from '../../shared/i-utilizador';
import { catchError, map, mergeMap, Observable, of, switchMap, take } from 'rxjs';
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

  localUserSubscrition: IUtilizador[] = [];

  /// criação das variaveis de error
  errorPromise: LocalError = { errorAsync: false, errorNome: '' };
  errorAsyncAwaitPromise: LocalError = { errorAsync: false, errorNome: '' };
  errorObservable: LocalError = { errorAsync: false, errorNome: '' };

  ///falaremos sobre DI ou Injeção de Depedência
  constructor(
    protected fakeBack: FakeBack,
    private cdr: ChangeDetectorRef,
  ) {
    this.localUserObservable$ = fakeBack.getUtilizadoresObservable();

    ///invocando o metodo de promise
    this.carregarPromise();

    ///invocando o 2º metodo de promise
    this.carregarAsyncAwaitPromise();

    ///invocando o metodo de Observable
    this.carregarObservable();

  //  this.cdr.detectChanges();

  }

  carregarPromise = () => {
    this.fakeBack
      .getUtilizadorsPromise()
      .then((result: IUtilizador[]) => {
        this.localUserPromise = result;
        // console.log('Nosso Result: ', this.localUserPromise);
      //  this.cdr.detectChanges();
        return this.localUserPromise;
      })
      .catch((e) => {
        // console.error('Nosso Error: ', e);
        this.errorPromise = { errorAsync: true, errorNome: 'Error no carregarPromise(): ' + e };
        this.localUserPromise = [];
      });
  };

  /**
   * ASYNC & AWAIT
   */
  carregarAsyncAwaitPromise() {
    this.fakeBack
      .getUtlizadoresAsync()
      .then((res: IUtilizador[]) => {
      //  console.log('Nosso Result em carregarAsyncAwaitPromise(): ', res);
        this.localUserAsyncPromise = res;
      })
      .catch((error) => {
     //   console.error('Nosso Error em carregarAsyncAwaitPromise(): ', error);
        this.localUserAsyncPromise = [];
        this.errorAsyncAwaitPromise = {
          errorAsync: true,
          errorNome: 'Error no carregarAsyncAwaitPromise(): ' + error,
        };
      });
  }

  carregarObservable = () => {
    ///falar um pouco sobre RxJS
    ///operador take(1), este cara faz com que apos 1 subscrição o canal de dados seja fechado
    this.fakeBack.getUtilizadoresObservable().pipe(
      take(1),
      switchMap((res: IUtilizador[]) => {
        console.log('Nosso Result em carregarObservable(): ', res);
        this.localUserSubscrition = res;
        this.cdr.detectChanges();
        return this.localUserSubscrition;
      }),
      catchError((error) => {
        console.error('Nosso Error em carregarObservable(): ', error);
        this.errorObservable = {errorAsync: true, errorNome: "Erro no metodo carregarObservable:  " + error };
        return of([]);
      }),
    ).subscribe();
  };
  carregarObservableComSubscribleObjeto() {
    ///falar um pouco sobre RxJS
    ///operador take(1), este cara faz com que apos 1 subscrição o canal de dados seja fechado
    let localArrayIUser: IUtilizador[] = [];
    let localArrayIUser2: IUtilizador[] = [];
    this.fakeBack.getUtilizadoresObservable().pipe(
      take(1),
      switchMap((res: IUtilizador[]) => {
        console.log('carregarObservableComSubscribleObjeto(): ', res);
        localArrayIUser2 = res;
        return res;
      }),  
      //  mergeMap((res: IUtilizador[]) => {
        //   console.log('carregarObservableComSubscribleObjeto(): ', res);
        //   return res;
        // }), 
        
      ).subscribe({
        next: (result: IUtilizador) => { console.log("nosso dados: ", result),
          localArrayIUser.push(result);

       },
      error: (e) => console.log("nosso Erro no metodo carregarObservableComSubscribleObjeto()" + e),
      complete: () => console.log("nosso complete, terminou o Observable"),
    });
  };
} /// endclass
