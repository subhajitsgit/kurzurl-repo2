import { Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', redirectTo: '' }
];
