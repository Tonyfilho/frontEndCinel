import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-listas',
  imports: [],
  templateUrl: './tag-listas.html',
  styleUrl: './tag-listas.css',
})
export class TagListas {
  minhaString: string = 'Paulo'; //isto é uma string

  /**Isto é um ARRAY de String , ou um predio de string na memoria */
  minhaLista: string[] = [
    'Tony',
    'DATE_PIPE_DEFAULT_OPTIONS',
    'samata',
    'leonardo',
    'Priscila',
    'Sara',
    '1',
    'false',
    this.minhaString,
  ];
  /***Minha Lista de ANY, não é comum usar o any, e ele desliga o TypeScript */
  minhaListaJS: any[] = [
    'Tony',
    'DATE_PIPE_DEFAULT_OPTIONS',
    'samata',
    'leonardo',
    'Priscila',
    'Sara',
    1,
    false,
  ];
  /**Minha Lista(Super Array) com error */
  // minhaListaJSNumer: number[] = ["Tony", "DATE_PIPE_DEFAULT_OPTIONS", "samata", "leonardo", 'Priscila', "Sara", 1, false];
}
