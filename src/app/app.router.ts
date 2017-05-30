import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { CamerasComponent } from './cameras/cameras.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'nosotros', component: AboutComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'productos/camaras', component: CamerasComponent },
  { path: 'productos/alarmas', component: AlarmsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: 'productos' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
