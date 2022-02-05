import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagepokemonComponent } from './managepokemon/managepokemon.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { PokemonService } from './managepokemon/managepokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    ManagepokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    CardModule,
    TableModule,
    ButtonModule,
    SliderModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    ToastModule,
  ],
  providers: [
    PokemonService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
