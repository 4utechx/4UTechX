import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CareersComponent } from './careers/careers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
