import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../../shared/i-animal';

@Component({
  selector: 'app-poo',
  imports: [],
  templateUrl: './poo.html',
  styleUrl: './poo.css',
})
export class Poo implements IAnimal, OnInit {
  nome: string;

  makeSound(): void {
    console.log('Ja tenho som');
  }

  constructor() {
    this.nome = 'tony';
  }

  ngOnInit(): void {
    this.makeSound();
  }
}
