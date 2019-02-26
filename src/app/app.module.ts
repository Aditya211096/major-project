import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './body/body.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    BodyComponent,
    ForgotPasswordComponent,
    HomeComponent,
    SideNavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent
      },
      {
      path:'mainpage',
      component:MainComponent
      },
      {
      path:'forgotpassword',
      component:ForgotPasswordComponent
      },
      {
        path:'homepage',
        component:HomeComponent
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
