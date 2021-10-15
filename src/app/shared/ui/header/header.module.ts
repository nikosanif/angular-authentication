import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiSvgModule,
  TuiHintModule,
} from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiAvatarModule,
    TuiSvgModule,
    TuiHintModule,
    FontAwesomeModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
