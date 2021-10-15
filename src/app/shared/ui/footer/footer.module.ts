import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TuiLinkModule } from '@taiga-ui/core';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, TuiLinkModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
