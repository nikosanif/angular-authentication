import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { AUTH_FACADE } from './auth';
import { ConfigService, GoogleAnalyticsService } from './core/services';
import { FooterComponent } from './shared/ui/footer';
import { HeaderComponent } from './shared/ui/header';

@Component({
  selector: 'aa-root',
  imports: [AsyncPipe, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="content">
      <aa-header [authUser]="authUser$ | async" (logout)="onLogout()" />

      <div class="main-content">
        <main><router-outlet /></main>
        <aa-footer [version]="version" />
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly authFacade = inject(AUTH_FACADE);
  private readonly configService = inject(ConfigService);
  private readonly googleAnalyticsService = inject(GoogleAnalyticsService);

  readonly version = this.configService.getVersion();
  readonly authUser$ = this.authFacade.authUser$;

  ngOnInit() {
    if (this.configService.isProd()) {
      this.setupGoogleAnalytics();
    }
  }

  protected onLogout() {
    this.authFacade.logout();
  }

  private setupGoogleAnalytics() {
    this.router.events
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(navigationEndEvent => {
        this.googleAnalyticsService.sendPageView(
          (navigationEndEvent as NavigationEnd).urlAfterRedirects
        );
      });
  }
}
