import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLandingComponent } from './wish/auth-landing.component';
import { AuthProcessingComponent } from './cake/auth-processing.component';
import { AuthVerifiedComponent } from './greetings/auth-verified.component';
import { DopeButterflyComponent } from './dope-butterfly/dope-butterfly.component';

const routes: Routes = [
  { path: '', component: AuthLandingComponent  },

  { path: 'greetings', component: AuthVerifiedComponent },

  {path: 'cake', component:AuthProcessingComponent },
  {path: 'butterfly', component:DopeButterflyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
