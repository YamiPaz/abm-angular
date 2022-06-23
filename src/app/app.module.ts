import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProvinciaComponent } from './components/crear-provincia/crear-provincia.component';
import { DetalleProvinciaComponent } from './components/detalle-provincia/detalle-provincia.component';
import { ListaProvinciaComponent } from './components/lista-provincia/lista-provincia.component';
import { EditarProvinciaComponent } from './components/editar-provincia/editar-provincia.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProvinciaComponent,
    DetalleProvinciaComponent,
    ListaProvinciaComponent,
    EditarProvinciaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
