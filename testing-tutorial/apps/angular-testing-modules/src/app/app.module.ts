import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooModule } from '../../../../libs/foo/src';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, FooModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
