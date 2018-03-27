import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VenueService } from './services/venue.service';
import { VenueModule } from './venue/venue.module';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([]),
    VenueModule
  ],
  providers: [
    VenueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
