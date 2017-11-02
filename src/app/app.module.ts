

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SermonsComponent } from './sermons/sermons.component';
import { EventsComponent } from './events/events.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { DonationsComponent } from './donations/donations.component';
import { VisitComponent } from './visit/visit.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SermonsComponent,
    EventsComponent,
    MinistriesComponent,
    DonationsComponent,
    VisitComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
