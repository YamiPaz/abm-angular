import { DetalleProvinciaComponent } from '../detalle-provincia/detalle-provincia.component';
import { Observable } from "rxjs";
import { ProvinciaService } from "../../provincia.service";
import { Provincia } from "../../provincia";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-provincia',
  templateUrl: './lista-provincia.component.html',
  styleUrls: ['./lista-provincia.component.css']
})
export class ListaProvinciaComponent implements OnInit {
  provincias! : Observable<Provincia[]>;
  texto: string='';
  constructor(private provinciaService: ProvinciaService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.provincias = this.provinciaService.getProvincias();
  }

 busqueda(){
   this.provincias = this.provinciaService.getProvinciaNombre(this.texto);
  }

  eliminarProvincia(id: number) {
    this.provinciaService.eliminarProvincia(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detalleProvincia(id: number){
    this.router.navigate(['detalle', id]);
  }

  actualizarProvincia(id: number){
    this.router.navigate(['actualizar', id]);
  }

}
