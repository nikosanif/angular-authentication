import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { ConfigService, GoogleAnalyticsService } from '../core/services';

@Component({
  selector: 'aa-root',
  template: `
    <div class="content">
      <!-- TODO: comment in -->
      <!-- <aa-header></aa-header> -->

      <div class="main-content">
        <main><router-outlet /></main>

        <aa-footer />
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly configService = inject(ConfigService);
  private readonly googleAnalyticsService = inject(GoogleAnalyticsService);

  ngOnInit() {
    if (this.configService.isProd()) {
      this.setupGoogleAnalytics();
    }
  }

  private setupGoogleAnalytics() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(navigationEndEvent => {
        this.googleAnalyticsService.sendPageView(
          (navigationEndEvent as NavigationEnd).urlAfterRedirects
        );
      });
  }
}
