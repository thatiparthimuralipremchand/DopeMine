import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, isDevMode, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserTracing } from "@sentry/tracing";
import { APP_INITIALIZER, ErrorHandler } from "@angular/core";
import { Router } from "@angular/router";
import { Integrations } from "@sentry/tracing";
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AuthVerifiedComponent } from './greetings/auth-verified.component';
import { AuthProcessingComponent } from './cake/auth-processing.component';
import { AuthLandingComponent } from './wish/auth-landing.component';
import { DopeButterflyComponent } from './dope-butterfly/dope-butterfly.component';




@Injectable()


@NgModule({
  declarations: [
    AppComponent,
    AuthVerifiedComponent,
    AuthProcessingComponent,
    AuthLandingComponent,
    DopeButterflyComponent
  ],
  imports: [

    FormsModule,IonicModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    TagCloudModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
       registrationStrategy: 'registerWhenStable:30000'
    })
  ],

  providers: [{ provide: ErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
