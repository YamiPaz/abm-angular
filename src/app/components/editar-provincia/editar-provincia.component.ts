import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from "../../provincia.service";
import { Provincia } from "../../provincia";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-provincia',
  templateUrl: './editar-provincia.component.html',
  styleUrls: ['./editar-provincia.component.css']
})
export class EditarProvinciaComponent implements OnInit {

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

  actualizarProvincia() {
    this.provinciaService.actualizarProvincia(this.provincia)
      .subscribe(data => {
        console.log(data);
        this.provincia = new Provincia();
        this.router.navigate(['/']);
      }, error => console.log(error));
  }
  

  onSubmit() {
    this.actualizarProvincia();    
  }
  list(){
    this.router.navigate(['/']);
  }

}
