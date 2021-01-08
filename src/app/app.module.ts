import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { PagelineTopComponent } from './pageline-top/pageline-top.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    PagelineTopComponent,
    MenuLeftComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
