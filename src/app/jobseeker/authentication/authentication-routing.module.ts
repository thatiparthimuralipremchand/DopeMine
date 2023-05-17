import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLandingComponent } from './components/auth-landing/auth-landing.component';
import { AuthProcessingComponent } from './components/auth-processing/auth-processing.component';
import { AuthVerifiedComponent } from './components/auth-verified/auth-verified.component';


const routes: Routes = [
  { path: '', component: AuthLandingComponent  },

  { path: 'verify', component: AuthVerifiedComponent },

  {path: 'processing', component:AuthProcessingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
