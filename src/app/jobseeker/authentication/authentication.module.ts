import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthLandingComponent } from './components/auth-landing/auth-landing.component';
import { AuthProcessingComponent } from './components/auth-processing/auth-processing.component';
import { AuthVerifiedComponent } from './components/auth-verified/auth-verified.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagCloudModule } from 'angular-tag-cloud-module';

@NgModule({
  declarations: [
    AuthLandingComponent,
    AuthProcessingComponent,
    AuthVerifiedComponent,
 

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    TagCloudModule,
     FormsModule
    
 
  ]
})
export class AuthenticationModule { }
