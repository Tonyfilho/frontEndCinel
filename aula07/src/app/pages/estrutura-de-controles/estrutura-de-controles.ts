import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrutura-de-controles',
  imports: [],
  templateUrl: './estrutura-de-controles.html',
  styleUrl: './estrutura-de-controles.css',
})
export class EstruturaDeControles implements OnInit {
  idade: number = 18;
  cor: string = 'vermelha';

  constructor() {
    // this.idade = this.idade +  10;
    // this.idade =+  10;
    console.log('variavel idade: ?', this.idade);
  }

  ///1 dos construtores do Angular

  ngOnInit(): void {
    /// um abordade de não usar o else
    this.exemploIfElse();
    this.exemploSwitchCase();
  }

  exemploIfElse = () => {
    if (this.idade >= 18) {
      console.log('Idade é maior que 18: ', this.idade);
    } else {
      console.log('Idade é menor que 18: ', this.idade);
    }
    ///sem o Else
    if (this.idade <= 18) {
      ///caso seja verdade o retorno funciona e a proxima linha não executa
      return console.log('Idade é menor que 18: ', this.idade);
    }
    ///linha 35 não executa
    console.log('Idade é maior que 18: ', this.idade);
  };

  exemploSwitchCase() {
    switch (this.cor) {
      case 'azul':
        console.log('Cor encontrada é azul');
        break;
      case 'rosa':
        console.log('Cor encontrada é rosa');
        break;
      case 'roxo':
        console.log('Cor encontrada é roxo');
        break;
      case "vermelha":
        console.log('Cor encontrada é vermelha');
        break;

      default:
        console.log('Cor não encontrada');
        break;
    }
  }




  
} /// fim da classe
