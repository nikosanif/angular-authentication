import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { AuthFacade } from '../store/auth.facade';

@Component({
  selector: 'aa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  public isLoading$ = this.authFacade.isLoadingLogin$;
  public showLoginError$ = this.authFacade.hasLoginError$;

  constructor(private authFacade: AuthFacade) {}

  submit() {
    const { username, password } = this.loginForm.value;
    this.authFacade.login(username, password);
  }
}
