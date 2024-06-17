import { Injectable, inject } from '@angular/core';

import { ConfigService } from './config.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  private readonly configService = inject(ConfigService);
  private readonly localStorageService = inject(LocalStorageService);

  private readonly accessTokenKey =
    this.configService.getAuthSettings().accessTokenKey || 'accessToken';
  private readonly refreshTokenKey =
    this.configService.getAuthSettings().refreshTokenKey || 'refreshToken';

  getAccessToken(): string {
    return this.localStorageService.getItem(this.accessTokenKey) as string;
  }

  saveAccessToken(token: string) {
    this.localStorageService.setItem(this.accessTokenKey, token);
  }

  getRefreshToken(): string {
    return this.localStorageService.getItem(this.refreshTokenKey) as string;
  }

  saveRefreshToken(token: string) {
    this.localStorageService.setItem(this.refreshTokenKey, token);
  }

  saveTokens(accessToken: string, refreshToken: string) {
    this.saveAccessToken(accessToken);
    this.saveRefreshToken(refreshToken);
  }

  removeTokens() {
    this.localStorageService.removeItem(this.accessTokenKey);
    this.localStorageService.removeItem(this.refreshTokenKey);
  }
}
