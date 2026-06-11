import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

type meuObjeto = { nome: string; endereco: string; numero: number; admin: boolean };

@Component({
  selector: 'app-tipo-de-dados',
  imports: [CommonModule],
  templateUrl: './tipo-de-dados.html',
  styleUrl: './tipo-de-dados.css',
})
export class TipoDeDados implements OnInit {
  localString: string = 'meu texto'; /// tipo string /// tipo char 'y'
  localNumber: number = 100; ///tipo number /// long, biglong, int, inteiro.....
  localBollean: boolean = false; /// tipo boolean
  localArray: string[] = ['Leo', 'Evaldina', 'Paulo', 'Rafael', 'Monica', 'Samara', 'false'];
  localArray2: number[] = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  localNull: null = null;
  localNull2!: null;
  localUndefined: undefined = undefined;
  localUndefined2?: undefined;
  localObjecto = { nome: 'tony', endereco: 'rua....', numero: 10, admin: false, lado: 'esquerdo' };
  localObjecto2: meuObjeto = { nome: 'tony', endereco: 'rua....', numero: 10, admin: false };

  /**tipo de dados assyncronos */
  localPromise: Promise<string> = new Promise<string>((resolve, reject) => {
    if (resolve) {
      resolve('Aula de Assincronos em Promise');
    }
    reject('Error Http 400');
  });

  localObservable$ = new Observable((ana) => ana.next('Aula de Assincronos Observables'));
  localObservable2$: Observable<string> = of('Aula de Assincronos Observables2');

  /**construtor do JS */
  constructor() {
    this.localPromise.then((result) =>
      console.log('********minha variavel de promise com Them ', result),
    );
    console.log('minha variavel de string:  ', this.localString);
    console.log('minha variavel de number: ', this.localNumber);
    console.log('minha variavel de boolean: ', this.localBollean);
    console.log('minha variavel de array: ', this.localArray);
    console.log('minha variavel de null: ', this.localNull);
    console.log('minha variavel de undefined: ', this.localUndefined);
    // console.log('minha variavel de promise sem Pending: ', this.localPromise);
    // console.log('minha variavel de observable sem Subscribe: ', this.localObservable$);
    console.log('minha variavel do tipo Objeto: ', this.localObjecto2);
    console.log('minha variavel do tipo Objeto.nome: ', this.localObjecto2.nome);
    console.log('minha variavel do tipo Objeto.endereco: ', this.localObjecto2['endereco']);
    console.log('minha variavel do tipo Objeto.numero: ', this.localObjecto2.numero);
    console.log('minha variavel do tipo Objeto.admin: ', this.localObjecto2['admin']);

  }

  ngOnInit(): void {
    this.localObservable$.subscribe((data) =>
      console.log('minha variavel de observable com Subscribe', data as string),
    );

    this.localObservable2$.subscribe({
      next: (result) => console.log('Nosso 2º Observable: ' + result),
      error: (e) => console.error('Error do Observable' + e),
      complete: () => console.log('Observable completo'),
    });
  }
}
