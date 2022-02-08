import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, mockProvider } from '@ngneat/spectator';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiHintModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { of } from 'rxjs';

import { AuthFacade } from '../../../auth/store/auth.facade';
import { AuthUser } from '../../../auth/store/auth.models';
import { IconModule } from '../icon/icon.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  const createComponent = createComponentFactory({
    component: HeaderComponent,
    imports: [
      RouterTestingModule,
      TuiButtonModule,
      TuiHostedDropdownModule,
      TuiDataListModule,
      TuiAvatarModule,
      TuiSvgModule,
      TuiHintModule,
      IconModule,
    ],
    mocks: [AuthFacade],
  });

  it('should display menu links', () => {
    const spectator = createComponent();
    const menuItems = ['Home', 'About', 'Secured Feature'];

    expect(spectator.queryAll('.menu-items a')).toHaveLength(menuItems.length);

    menuItems.forEach(menuItem => {
      const menuElem = spectator.query(`.menu-items a[data-test="${menuItem}"]`);
      expect(menuElem).toBeTruthy();
    });
  });

  it('should display user avatar when auth user exists', () => {
    const fakeUser: AuthUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    };

    const mockAuthFacade = mockProvider(AuthFacade, { user$: of(fakeUser) });
    const spectator = createComponent({ providers: [mockAuthFacade] });

    const avatarElem = spectator.query('[data-test="user-avatar"]');
    expect(avatarElem).toBeTruthy();
  });

  it('should display login button when user not exists', () => {
    const mockAuthFacade = mockProvider(AuthFacade, { user$: of(undefined) });
    const spectator = createComponent({ providers: [mockAuthFacade] });

    const loginBtnElem = spectator.query('[data-test="login-btn"]');
    expect(loginBtnElem).toBeTruthy();
  });
});
