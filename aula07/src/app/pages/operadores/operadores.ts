import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-operadores',
  imports: [CommonModule],
  templateUrl: './operadores.html',
  styleUrl: './operadores.css',
})
export class Operadores {
  /// Operadores arimeticos
  /// soma, subtração, multiplicação, divisão e resto
  localAritimeticos: string = '+, -, * , /, % ';

  ///Operadores de Comparação
  /// comparação sem tipagem, comparação com tipagem, diferente sem tipagem,
  /// diferente com tipagem, maior, menor, maior&igual, menor&iqual.
  localComparacao: string = '==, ===, !=, !==, > , <, >= , <=';

  exemploOperador = '3'; // se usar == o compilador vai falar que é if(3 == exemploOperador); true
  exemploOperador3Iquais = '3'; // se usar === o compilador vai falar que é if(3 === "3"); false

  /// Operadores Lógicos
  /// & o E é 100% true
  /// || o Ou pode ter 1 true
  /// ?? coalescência nula , ou um e outro, substitui o if e else;
  localLogicos: string = '&&, || , ?? ';

  ///Operador de Atribuição
  /**Obs: em outras liguagens pode aparece assim: =+, ou =- */
  localAribuicao: string = ' = , +=, -= ';

  ///Operador Ternario
  /// cursos
  localTernario: string = " localName =  this.cursos ? 'curso de Java' : 'curso de Js' ";

  constructor() {
    let exemploNumber = 10; //aqui tenho 10
    ///quanto tem na variavel exemploNumber ????
    exemploNumber += 20; //aqui  tenho 30

    let localternario = exemploNumber ? 50 : 100;

    /*ternario permite fazer pre checagem, exemplo abaixo one se na variavel 
    for iqual ao valor 30, eu faço a atribuição valor 50 senão eu faço valor 100    
    */
    let localternario2 = exemploNumber === 30 ? 50 : 100; ///
  }
}
