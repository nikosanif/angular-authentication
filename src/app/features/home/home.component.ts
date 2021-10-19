import { Component } from '@angular/core';

import { Feature, features } from './features.data';

@Component({
  selector: 'aa-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  showAllFeatures = false;

  get features(): Feature[] {
    return this.showAllFeatures ? features : features.slice(0, 8);
  }
}
