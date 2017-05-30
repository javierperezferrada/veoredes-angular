import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CamerasComponent } from './cameras/cameras.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { HomeComponent } from './home/home.component';
import { EmailValidator } from '../validators';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    CamerasComponent,
    AlarmsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [EmailValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
