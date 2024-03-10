import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-password {
        display: block;
      }

      :host ::ng-deep .p-password-input {
        width: 100%;
        padding: 1rem;
        margin-bottom: 16px;
      }

      :host ::ng-deep .p-password .p-icon-wrapper {
        margin-top: -15px !important;
        cursor: pointer;
      }
    `,
  ],
})
export class LoginComponent {
  greeting?: string;
  loginForm: FormGroup;
  loginStatusMessage: string = '';
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loading = true;

    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((field) => {
        const control = this.loginForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      this.loading = false;
      return;
    }

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/annonces']);
      },
      error: (error) => {
        console.log(error);
        this.loginStatusMessage =
          'Échec de la connexion. Veuillez vérifier votre identifiant et mot de passe.';
        this.loading = false;
      },
    });
  }
}
