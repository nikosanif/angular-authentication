import { Injectable } from '@angular/core';

declare const gtag: any;
const GOOGLE_ANALYTICS_ID = 'UA-217340656-1';

@Injectable({ providedIn: 'root' })
export class GoogleAnalyticsService {
  protected gtag: any;

  constructor() {
    if (typeof gtag !== 'undefined') {
      this.gtag = gtag;
    }
  }

  sendEvent = (
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string | null = null,
    eventValue: number | null = null
  ) => {
    if (!this.gtag) {
      return;
    }

    this.gtag('event', eventName, {
      eventCategory,
      eventLabel,
      eventAction,
      eventValue,
    });
  };

  sendPageView(url: string) {
    if (!this.gtag) {
      return;
    }

    this.gtag('config', GOOGLE_ANALYTICS_ID, { page_path: url });
  }
}
