import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from '@angular/core';
import { FirebaseService } from './firebase';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, from, Observable, of, take, tap, throwError } from 'rxjs';
import {
  AuthError,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
  UserCredential,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private auth = inject(FirebaseService).auth;
  private environmentInjector = inject(EnvironmentInjector);
  private routes = inject(Router);
  ///este é um observable do tipo Hot
  private user$ = new BehaviorSubject<User | null>(null);

  /**O método initAuthListener() serve para monitorizar o estado de autenticação do utilizador em tempo real e atualizar a aplicação automaticamente quando esse estado muda.
Aqui está o que ele faz em detalhe:
* O que acontece na prática?
* Escuta o Firebase: A função onAuthStateChanged liga um "ouvinte" (listener) ao Firebase Auth.
* Deteta mudanças: O Firebase avisa este método sempre que o utilizador faz login, faz logout ou quando a sessão é restaurada ao abrir a página.
* Atualiza a aplicação: Quando o Firebase deteta o utilizador, o método envia esses dados para o user$ (através de this.user$.next(user)).
* Reatividade: Todos os componentes que subscrevem o getUser() recebem o novo estado do utilizador instantaneamente.
* Para que serve o runInInjectionContext?
* Contexto do Angular: Garante que o código do Firebase corre dentro do contexto de injeção de dependências do Angular.
* Segurança: Impede erros de ciclo de vida do Angular se o Firebase disparar o evento antes do serviço estar totalmente pronto.
 */

  /**
 * Como o Firebase gere a sessão
* Persistência automática: Por padrão, o SDK do Firebase salva o token de autenticação e os dados do utilizador no IndexedDB ou no LocalStorage do navegador [1, 2].
* Recuperação automática: Quando o utilizador fecha a aba e volta ao site no dia seguinte, o Firebase vai ler esse armazenamento interno [2].
* O papel do onAuthStateChanged: Assim que o Firebase termina de ler os dados armazenados (o que demora alguns milissegundos), o onAuthStateChanged é disparado automaticamente com o utilizador que foi recuperado [2].
* A única coisa que precisa garantir
* Para que isto funcione perfeitamente ao abrir o site, você só precisa de garantir que o método initAuthListener() é chamado logo no início da aplicação.
* O local ideal para chamar o initAuthListener() é no ngOnInit do seu AppComponent ou através de um APP_INITIALIZER no Angular.
.
 
 */

  initAuthListener(): void {
    runInInjectionContext(this.environmentInjector, () => {
      onAuthStateChanged(this.auth, (user: User | null) => {
        this.user$.next(user);
      });
    });
  };

  getUser(): Observable<User | null> {
    return this.user$.asObservable();
  };

  isAuthenticated = (): boolean => {
    return this.user$.value !== null;
  };

  loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    /// from transforma Promise em Observable
    return from(signInWithPopup(this.auth, provider)).pipe(
      ///take() é o operador de dessubscrição
      take(1),
      ///este operador pesca dentro do fluxo do pipe uma informação
      tap((user: UserCredential) => {
        console.log("Nosso result no Server.ts: ", user);
        this.routes.navigate(['/about']);
      }),
      ///é o operador de captura de error
      catchError((e: AuthError) => {
       /// return of(e.message || 'Erro desconecido tente mais tarde');
         return throwError(() => new Error(e.message || 'Erro desconecido tente mais tarde'));
      }),
    );
  };


  logout = () => {
    this.user$.next(null);
    this.auth.signOut().catch((e) => console.error("Error no Logout do Google", e));
    this.routes.navigate(['/welcome']);

  }
} //fim do service
