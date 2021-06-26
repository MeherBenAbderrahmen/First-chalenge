import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonNavbarComponent } from './mon-navbar/mon-navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { WelcomComponent } from './welcom/welcom.component';

@NgModule({
  declarations: [
    AppComponent,
    MonNavbarComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    WelcomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
