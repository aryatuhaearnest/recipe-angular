import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, SuccessComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    BrowserAnimationsModule,
    
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule {}
