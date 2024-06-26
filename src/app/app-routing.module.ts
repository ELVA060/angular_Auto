import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciopaginaComponent } from './paginas/iniciopagina/iniciopagina.component';
import { DetallevehiculosComponent } from './paginas/detallevehiculos/detallevehiculos.component';
import { RegistrolitavehiculosComponent } from './paginas/registrolitavehiculos/registrolitavehiculos.component';
import { PaginalistavehiculosComponent } from './paginas/paginalistavehiculos/paginalistavehiculos.component';
import { EditarvehiculoComponent } from './paginas/editarvehiculo/editarvehiculo.component';

const routes: Routes = [
  {
    path: "inicio",
    component: IniciopaginaComponent
  },

  {
    path: "autos/:codigo",
    component: DetallevehiculosComponent
  },
  {
    path: "nuevo",
    component: RegistrolitavehiculosComponent
  },
  {
    path: "",
    component: PaginalistavehiculosComponent
  },
  {
    path: "editar",
    component: EditarvehiculoComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
