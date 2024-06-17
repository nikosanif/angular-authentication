import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthFacade } from '../store/auth.facade';

@Component({
  selector: 'aa-login',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly authFacade = inject(AuthFacade);

  readonly loginForm = new UntypedFormGroup({
    username: new UntypedFormControl('', {
      validators: [Validators.required],
    }),
    password: new UntypedFormControl('', {
      validators: [Validators.required],
    }),
  });

  readonly isLoading$ = this.authFacade.isLoadingLogin$;
  readonly showLoginError$ = this.authFacade.hasLoginError$;

  submit() {
    const { username, password } = this.loginForm.value;
    this.authFacade.login(username, password);
  }
}
