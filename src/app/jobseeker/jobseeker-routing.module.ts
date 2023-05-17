import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'profile',
  // loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)},
  // {path:'profile',
  // loadChildren:()=>import('./dashboard/components/jobseeker-profile/jobseeker-profile.module').then(m=>m.JobseekerProfileModule)},

{path:'',
loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule),},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})  
export class JobseekerRoutingModule { }        
