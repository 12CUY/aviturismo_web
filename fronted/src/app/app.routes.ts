import { Routes } from '@angular/router';

import { HomeComponent } from './pages/general/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';
import { SignupComponent } from './pages/general/signup/signup.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

import { AboutComponent } from './pages/general/about/about.component';


import { ContactComponent } from './pages/general/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'about', component: AboutComponent,
  },
  {
    path: 'contact', component: ContactComponent,

  },

  { path: '**', component: NotFoundComponent }
];