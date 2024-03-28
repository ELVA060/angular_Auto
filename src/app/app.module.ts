import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginalistavehiculosComponent } from './paginas/paginalistavehiculos/paginalistavehiculos.component';
import { IniciopaginaComponent } from './paginas/iniciopagina/iniciopagina.component';
import { DetallevehiculosComponent } from './paginas/detallevehiculos/detallevehiculos.component';
import { EditarvehiculoComponent } from './paginas/editarvehiculo/editarvehiculo.component';
import { EstrellasComponent } from './utilitarios/estrellas/estrellas.component';
import { RegistrolitavehiculosComponent } from './paginas/registrolitavehiculos/registrolitavehiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,PaginalistavehiculosComponent, IniciopaginaComponent, DetallevehiculosComponent, EditarvehiculoComponent, EstrellasComponent, RegistrolitavehiculosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, RouterModule, ReactiveFormsModule, HttpClientModule,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
