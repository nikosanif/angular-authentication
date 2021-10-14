import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TuiRootModule,
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,

    // Taiga UI
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiAvatarModule,
    TuiSvgModule,

    // Core
    CoreModule,

    // Routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
