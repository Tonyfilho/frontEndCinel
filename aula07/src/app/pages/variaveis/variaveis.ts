import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-variaveis',
  imports: [CommonModule],
  templateUrl: './variaveis.html',
  styleUrl: './variaveis.css',
})
export class Variaveis {
  ///variaveis globais
  nome = 'tony';
  localObjecto = { nome: 'tony', endereco: 'rua....', numero: 10, admin: false, lado: 'esquerdo' };

  constructor() {
    console.log("Minha variavel global Objeto no constructor(): ", this.localObjecto);
    ///invocar no construtor
    this.metodoTestConst();
    this.metodoTestLet();
    this.metodoTestConst2();
    this.metodoTestLet2();
  }
  
  metodoTestLet() {
    console.log("Minha variavel global Objeto no  metodoTestLet(): ", this.localObjecto);
    this.nome = "Rafael";
    console.log("Minha variavel global nome  metodoTestLet(): ", this.localObjecto);
    
  }
  metodoTestConst() {
    console.log("Minha variavel global Objeto no metodoTestConst(): ", this.localObjecto);
    this.nome = "Paulo";
    console.log("Minha variavel global nome no metodoTestConst(): ", this.nome);   

  }
  metodoTestConst2 = ()  => {
   // var nome = 'tony';
   ///escopo local NÃO usa this.
    const localNome = " tony filho"
    const localNomeObjeto = {};
    const localNomeArray = [];
    console.log("Minha variavel Const localNome no metodoTestConst2(): ", localNome );   
    // localNome = "ana";
   // localNomeObjeto = {nome: "tony"};
    //localNomeArray = [1,2];

  }
  metodoTestLet2 = ()  => {
   // var nome = 'tony';
   ///escopo local NÃO usa this.
    let localNome = " tony filho"
    console.log("Minha variavel Const localNome no metodoTestLet2: ", localNome );  
    localNome = "Monica" 
    console.log("Minha variavel Const localNome no metodoTestLet2: ", localNome );  

  }
}
