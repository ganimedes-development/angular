import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerComponent } from './components/player/player.component';
import { HomeComponent } from './components/home/home.component';


//http service
import { HttpClientModule } from '@angular/common/http'
import { MetroService } from './services/metro.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MetroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
