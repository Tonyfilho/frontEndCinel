import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  localData: string;

  constructor() {
     const agora = DateTime.now();
       // Exibe a data em um formato mais amigável (ex: "14 de maio de 2024 15:30")
     this.localData = agora.toLocaleString(DateTime.DATETIME_FULL);
  }






}
