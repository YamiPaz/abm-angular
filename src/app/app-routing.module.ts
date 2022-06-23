import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleProvinciaComponent } from '../app/components/detalle-provincia/detalle-provincia.component';
import { CrearProvinciaComponent } from '../app/components/crear-provincia/crear-provincia.component';
import { ListaProvinciaComponent } from '../app/components/lista-provincia/lista-provincia.component';
import { EditarProvinciaComponent } from '../app/components/editar-provincia/editar-provincia.component';

const routes: Routes = [
  { path: '', redirectTo: 'provincia', pathMatch: 'full' },
  { path: '', component: ListaProvinciaComponent },
  { path: 'crear', component: CrearProvinciaComponent },
  { path: 'actualizar/:id', component: EditarProvinciaComponent },
  { path: 'detalle/:id', component: DetalleProvinciaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
