import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiLinkModule } from '@taiga-ui/core';

import { IconModule } from '../icon/icon.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule, TuiLinkModule, IconModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
