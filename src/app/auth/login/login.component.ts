import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthFacade } from '../store/auth.facade';

@Component({
  selector: 'aa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly loginForm = new UntypedFormGroup({
    username: new UntypedFormControl('', {
      validators: [Validators.required],
    }),
    password: new UntypedFormControl('', {
      validators: [Validators.required],
    }),
  });
  isLoading$ = this.authFacade.isLoadingLogin$;
  showLoginError$ = this.authFacade.hasLoginError$;

  constructor(private authFacade: AuthFacade) {}

  submit() {
    const { username, password } = this.loginForm.value;
    this.authFacade.login(username, password);
  }
}
