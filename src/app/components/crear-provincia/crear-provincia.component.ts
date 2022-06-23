import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from "../../provincia.service";
import { Provincia } from "../../provincia";
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-provincia',
  templateUrl: './crear-provincia.component.html',
  styleUrls: ['./crear-provincia.component.css']
})
export class CrearProvinciaComponent implements OnInit {

  provincia: Provincia = new Provincia();
  submitted = false;

  constructor(private provinciaService: ProvinciaService, private router: Router) { }

  ngOnInit() {
  }
  
  nuevaProvincia(): void {
    this.submitted = false;
    this.provincia = new Provincia();
  }

    guardar(){
    this.provinciaService
    .crearProvincia(this.provincia).subscribe(data=> {
      console.log(data)
      this.provincia=new Provincia();
      this.router.navigate(['/'])
    },
    error => console.log(error));
    
  }

  onSubmit() {
    this.submitted = true;
    this.guardar();    
  }


}
