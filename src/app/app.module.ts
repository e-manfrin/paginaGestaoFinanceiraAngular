import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// import { AdicionarComponent } from './home/adicionar/adicionar.component';
import { TabelaComponent } from './home/tabela/tabela.component';
import { GraficoComponent } from './home/grafico/grafico.component';
import { FootterComponent } from './footter/footter.component';
import { DataTablesModule } from 'angular-datatables';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    // AdicionarComponent,
    TabelaComponent,
    GraficoComponent,
    FootterComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
