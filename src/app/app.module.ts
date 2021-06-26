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
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { TableLigneComponent } from './table-ligne/table-ligne.component';

@NgModule({
  declarations: [
    AppComponent,
    MonNavbarComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    WelcomComponent,
    UserListComponent,
    UserAddComponent,
    UserUpdateComponent,
    TableLigneComponent
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
