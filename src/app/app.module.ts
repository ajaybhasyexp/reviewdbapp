import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SearchhomeComponent } from './components/searchhome/searchhome.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './modules/app.routing.module';
import { WriteReviewComponent } from './components/write-review/write-review.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthService } from './Services/auth.service';
import { ApiService } from './Services/api.service';
import { AuthGuard } from './auth.guard';
import { EqualValidatorDirective } from './shared/equal.validator.directive'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TopnavComponent,
    SearchhomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    WriteReviewComponent,
    LoginComponent,
    SignupComponent,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ApiService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
