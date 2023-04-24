import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { CtaComponent } from './components/cta/cta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DialogModule } from '@angular/cdk/dialog';
import { SignInComponent } from './components/dialogs/sign-in/sign-in.component';
import { SignUpComponent } from './components/dialogs/sign-up/sign-up.component';
import { ForgotUserPassComponent } from './components/dialogs/forgot-user-pass/forgot-user-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CtaComponent,
    SignInComponent,
    SignUpComponent,
    ForgotUserPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
