import { Component } from '@angular/core';
import { saudacoes } from './tipo_de_fuctions/fuct_declaracao_comum';
import { saudacoes02 } from './tipo_de_fuctions/fuct_expressao';
import { somar } from './tipo_de_fuctions/fuct_arrow_functions';
import { processar } from './tipo_de_fuctions/fuct_call_back';

@Component({
  selector: 'app-fuctions',
  imports: [],
  templateUrl: './fuctions.html',
  styleUrl: './fuctions.css',
})
export class Fuctions {
  ///sobre o THIS
   localSomar = () => {
    return console.log("nossa soma: ", 10 + 99);
   }

  constructor() {
    const localMessage = saudacoes('Tony ');
     
    console.log('Minha invocação da função de declaração comum: na linha 16: ' + localMessage);
    console.log('Minha invocação da função de Expressão comum: na linha 17: ' + saudacoes02());
    console.log('Minha invocação da Arrow Function Sem bloco  na linha 18: ' + somar(10, 20));
    console.log('Minha invocação da Arrow Function Com bloco  na linha 19: ' + somar(100, 20));
    console.log('Minha invocação da Função de CallBack  na linha 21: ' + processar(10, () => 20));
    console.log('Sobre o THIS: ', this.localSomar());

    
  }
}
