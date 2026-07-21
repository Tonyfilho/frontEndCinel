import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthStateService } from '../../service/auth-state';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forms',
  /* Um novo Modulo o MOdulo para Formarios*/
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  /**Variavel para receber criar Formulario e capturar os dados */
  protected signInForms: UntypedFormGroup;

  constructor(
    protected authService: AuthStateService,
    protected router: Router,
    private fb: UntypedFormBuilder,
  ) {
    this.signInForms = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
    /**O controls e a api do form que controla os Validators e tb os dados */
    console.log('nosso controls: ', this.signInForms.controls);
  }

  onSubmit() {
    if (!this.signInForms.valid) {
      /**Aprendendo a mudar a rota pelo TS */
      this.router.navigateByUrl('/');
    }
    const localFormEmail = this.signInForms.get('email')?.value;
    const localFormPassword = this.signInForms.get('password')?.value;
    const localFormsComplete = this.signInForms.value;
    console.log(
      `Dados do formulario passados individualmente:  Email: ${localFormEmail} e Password: ${localFormPassword}`,
    );
    console.log(`Objeto: formulário completo: ${JSON.stringify(localFormsComplete)}`);
  }

  goBack = () => {
    this.signInForms.reset();
    /**Aprendendo a mudar a rota pelo TS */
    this.router.navigateByUrl('/');
  };
 

  gmailAuthentication() {
    this.authService.loginWithGoogle().subscribe(
      {
        next: (res) => console.log("Meu result from Firebase Authentication", res),
        error: (e) => {
          console.error("nosso erro do firebase auth", e), this.goBack;
        },
      }
    );
  }
} //endclass
