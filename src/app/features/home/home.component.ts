import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { IconModule } from '../../shared/ui/icon';

import { Feature, features } from './features.data';

@Component({
  selector: 'aa-home',
  standalone: true,
  imports: [IconModule, MatButtonModule, MatCardModule, MatTooltipModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  showAllFeatures = false;

  get features(): Feature[] {
    return this.showAllFeatures ? features : features.slice(0, 8);
  }
}
