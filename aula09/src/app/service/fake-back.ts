import { Injectable } from '@angular/core';
import { IUtilizador } from '../shared/i-utilizador';
import { DataDummy } from './dummy/sand-box';
import { catchError, delay, from, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeBack {
  private localUtilizador: IUtilizador[] = DataDummy; ///isto vem de uma SQL ou de um NoSQL

  /**1º é a Promise */
  // =====================================================
  // MÉTODO 1 - PROMISE
  // =====================================================
  // Este método retorna uma Promise
  // Ideal para ensinar .then() e .catch()
  // =====================================================

  getUtilizadorsPromise(): Promise<IUtilizador[]> {
    return new Promise((resolve, reject) => {
      // simular um http ou requisição de uma API usaremos o setTimeout()
      setTimeout(() => {
        //para simular um error criaremos uma variavel
        const sucesso = Math.random() > 0.5;
        if (sucesso) {
          /// se fosse uma API retornaria nossos dados, um Json, uma Stream... etc
          resolve(this.localUtilizador);
        } else {
          reject('Error http 500');
        }
      }, 2000);
    });
  }

  // =====================================================
  // MÉTODO 2 - ASYNC / AWAIT
  // =====================================================
  // Este método também retorna Promise
  // Mas utiliza async/await
  // =====================================================

  async getUtlizadoresAsync(): Promise<IUtilizador[]> {
    try {
      const data = await this.getUtilizadorsPromise();
      return data;
    } catch (error) {
      console.log('nosso metodo getUtlizadoresAsync() ', error);
      throw error;
    }
  }

// =====================================================
  // MÉTODO 3 - OBSERVABLE
  // =====================================================
  // Observable é muito utilizado no Angular
  // HttpClient retorna Observable
  // as vezes temos que converter uma Promise para trabalhar com Observable
  // =====================================================

getUtilizadoresObservable():Observable<IUtilizador[]> {

 //simula sucesso ou erro
 const sucesso = Math.random() > 0.5;
 if (!sucesso) {
  return throwError(() =>  new Error("Error 404 Http"));
 }

 // FROM() este operador transforma uma promise em Observable
 //OF() este operador transforma um List ou Array ou Objeto em Observable
 const localPromise:Promise<IUtilizador[]> = this.getUtilizadorsPromise();
 return from(localPromise).pipe(  
  delay(2000),
  catchError((error) => {
   console.error("Error No Observable ", error);
   throw error;
  })
);}


}// endclass
