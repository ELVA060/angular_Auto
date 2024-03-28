import { Injectable } from '@angular/core';
import { Autos } from '../interfaceautos/autos';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { compileClassDebugInfo } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServehiculosService {
   
  private url: string = 'https://epico.gob.ec/vehiculo/public/api/';

  constructor(private http: HttpClient) {}

  getAutos(): Observable<Autos[]> {
    return this.http.get<any[]>(this.url+'vehiculos/').pipe(
      map((response: any) => {
        if (response.data && Array.isArray(response.data)) { // Verificar si la propiedad data existe y es un array
          return response.data.map((autos: { image: any; codigo: any; marca: any; modelo: any; anio: any; color: any; kilometraje: any; precio: any; calificacion: any; })=> ({
            image: autos.image,
            codigo: autos.codigo,
            marca: autos.marca,
            modelo: autos.modelo,
            anio: autos.anio,
            color: autos.color,
            kilometraje: autos.kilometraje,
            precio: autos.precio,
            calificacion: autos.calificacion
          }));
        } else {

          console.error('La respuesta de la API no es un array:', response);
          return [];
        }
      }),
      catchError((error: any) => {
        console.error('Error al obtener datos de la API:', error);
        return of([]);
      })
    );
  }
  getAuto(codigo: String): Observable<Autos> {
    return this.http.get<Autos>(`${this.url}vehiculo/${codigo}`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener el vehículo:', error);
        throw error; // Lanza el error para que pueda ser manejado por el componente que llama a este método
      })
    );
  }

  agregarVehiculo(autos: Autos): Observable<any> {
    return this.http.post<any>(this.url + 'vehiculo/', autos);
  }

  actualizarVehiculo(codigo: Number, autos: Autos): Observable<any> {
    return this.http.put<any>(`${this.url}vehiculo/${codigo}`, autos);
  }

  eliminarVehiculo(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.url}vehiculo/${codigo}`);
  }
}