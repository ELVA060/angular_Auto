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
eliminarVehiculo(arg0: string) {
throw new Error('Method not implemented.');
}
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

  eliminarVehiculo(codigo:string) {
      this.service.eliminarVehiculo(codigo).subscribe(response => {
        console.log('Auto eliminado con éxito');
        // Realiza cualquier acción adicional después de eliminar el auto, como actualizar la lista de autos, etc.
      }, error => {
        console.error('Error al eliminar el auto:', error)
      });}}