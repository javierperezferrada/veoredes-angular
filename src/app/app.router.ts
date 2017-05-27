import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'nosotros', component: AboutComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'contacto', component: ContactComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
