import { Component } from '@angular/core';

@Component({
  selector: 'app-lacos',
  imports: [],
  templateUrl: './lacos.html',
  styleUrl: './lacos.css',
})
export class Lacos {
  minhaCores: string[] = ['azul', 'vermelho', 'rouxo', 'verde', 'preto'];

  constructor() {
    this.minhaCores[0];
    this.minhaCores[1];
    this.minhaCores[2];
    this.minhaCores[3];
    this.minhaCores[4];
    // this.minhaCores[5]; no java e error
    ///for tradicional
    this.exemploForTradicional();
    /// for Of
    this.exemploForOf();
    /// forEach
    this.exemploForEach();
  }

  ///for tradicional
  exemploForTradicional = () => {
    /// for tradicional
    for (let i = 0; i < this.minhaCores.length; i++) {
      const element = this.minhaCores[i];
      console.log('Nosso Array no For Normal: ', element, 'meu andar do predio de corres: ' + i);
    }
  };

  ///forOF
  exemploForOf() {
    for (const data of this.minhaCores) {
      console.log('Nosso Array For OF: ', data);
    }
  }

  /// forEach
  exemploForEach = () => {
    // this.minhaCores.forEach(element =>  console.log('Nosso Array ForEach: ', element));
    this.minhaCores.forEach((element) => {
      console.log('Nosso Array ForEach: ', element);
    });
  };
} // fim da classe
