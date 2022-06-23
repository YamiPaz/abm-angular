import { Component, OnInit, Input } from '@angular/core';
import { ProvinciaService } from "../../provincia.service";
import { Provincia } from "../../provincia";
import { Router, ActivatedRoute } from '@angular/router';
import { ListaProvinciaComponent } from '../lista-provincia/lista-provincia.component';

@Component({
  selector: 'app-detalle-provincia',
  templateUrl: './detalle-provincia.component.html',
  styleUrls: ['./detalle-provincia.component.css']
})
export class DetalleProvinciaComponent implements OnInit {

  id!: number;
  provincia!: Provincia;
  
    constructor(private route: ActivatedRoute,private router: Router, private provinciaService: ProvinciaService) { }
  
    ngOnInit() {
      this.provincia = new Provincia();
      this.id = this.route.snapshot.params['id'];
  
      this.provinciaService.getProvincia(this.id)
      .subscribe(data => {
        console.log(data)
        this.provincia = data;
      }, error => console.log(error));
  
    }

    list(){
      this.router.navigate(['/']);
    }
    
    actualizarProvincia(id: number){
      this.router.navigate(['actualizar', id]);
    }
  

}
