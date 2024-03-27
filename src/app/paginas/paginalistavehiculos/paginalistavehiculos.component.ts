import { Component, OnInit } from '@angular/core';
import { Autos } from '../../interfaceautos/autos';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ServehiculosService } from '../../servicios/servehiculos.service';

@Component({
  selector: 'app-paginalistavehiculos',
  templateUrl: './paginalistavehiculos.component.html',
  styleUrls: ['./paginalistavehiculos.component.css']
})
export class PaginalistavehiculosComponent implements OnInit {
  faStar = faStar;
  autos: Autos[] = [];
  listafiltrada: Autos[] = [];
 
  constructor(private service: ServehiculosService) { 
  }


  mostrarImagenes: boolean = true;

  toggleImagenes() {
    this.mostrarImagenes = !this.mostrarImagenes;
  }

  buscador = ""



  ngOnInit(): void {
    this.service.getAutos().subscribe(
      (autos: Autos[]) => {
        this.autos = autos;
        console.log(this.autos);
        this.listafiltrada = this.autos;
      },
      (error: any) => {
        console.error('Error al obtener la lista de autos:', error);
      }
    )
  }



  buscadorauto() {
    this.listafiltrada = this.autos.filter((autos) => (autos.marca.toLowerCase().includes(this.buscador)));
  }
}
  
