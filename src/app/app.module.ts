import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule} from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { IndexComponent } from './components/pages/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { DashbroadComponent } from './components/pages/dashbroad/dashbroad.component';
import { SliderComponent } from './components/ui/slider/slider.component';

import { register } from 'swiper/element/bundle';
import { CardComponent } from './components/ui/card/card.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { FormsModule } from '@angular/forms';
register();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    DashbroadComponent,
    SliderComponent,
    CardComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
