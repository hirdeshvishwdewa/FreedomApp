// Angular core modules 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 3rd party modules
import { GridstackModule } from '@libria/gridstack';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Global Components
import { MasterComponent } from './components/master/master.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { FloorModule } from './modules/floor/floor.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridstackModule.forRoot(),
    SharedModule,
    FloorModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [
    SharedModule
  ]
})
export class AppModule { }
