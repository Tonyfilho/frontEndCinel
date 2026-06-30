import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
  styleUrl: './typescript.css',
})
export class Typescript implements OnInit {
  ///quando temos mais de uma tipo, temos que fazer o CASTING
  numeroDaCasa: number | string | undefined | null;
  numeroDaLoja: string;

  constructor() {
    this.numeroDaCasa = 1;
    this.numeroDaLoja = '1';
  }

  ngOnInit(): void {
    /// este aqui recebe somente 1 tipo de dado e precisa fazer o cast
    const leoNumber: number = this.numeroDaCasa as number;
    ///posso fazer o Casting pelo operador Diamante
    const leoNumber2: number = <number>this.numeroDaCasa;
    ///este aqui recebe os 4 tipo de dados
    this.numeroDaCasa = this.numeroDaLoja;

    console.log('Nosso numero: ' + leoNumber, 'Nosso outro numero: ' + leoNumber2);
  }

  meuNumeroDeCasa(): number {
    const localNome = 'Tony';
    console.log(
      'Nosso numero: ' + this.meuNumeroDeCasa,
      'Nosso outro numero: ' + this.numeroDaLoja,
    );
    console.log('Minha string' + localNome);
    return this.numeroDaCasa as number;
  }

  meuNome(): string | undefined {
    const localNome = 'Tony';
    console.log(
      'Nosso numero: ' + this.meuNumeroDeCasa,
      'Nosso outro numero: ' + this.numeroDaLoja,
    );
    console.log('Minha string' + localNome);
    return 'Meu nome é Tony';
    //  return undefined;
  }

  meuNome2 = (): string => {
    const localNome = 'Tony';
    console.log(
      'Nosso numero: ' + this.meuNumeroDeCasa,
      'Nosso outro numero: ' + this.numeroDaLoja,
    );
    console.log('Minha string' + localNome);
    return 'Meu nome é Tony';
  };
}
