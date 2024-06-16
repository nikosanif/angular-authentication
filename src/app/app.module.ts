import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TuiDialogModule, TuiNotificationsModule, TuiRootModule } from '@taiga-ui/core';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FooterModule } from './shared/ui/footer/footer.module';
import { HeaderModule } from './shared/ui/header/header.module';

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

    // Core
    CoreModule,

    // Application
    AppRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
