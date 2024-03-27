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
        console.log(response); 
        if (Array.isArray(response)) {
          return response.map(autos => ({
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
  getAuto(codigo: number): Observable<Autos | undefined> {
    return this.http.get<any>(`${this.url}vehiculo/${codigo}`).pipe(
      map((autos: any) => ({
        image: autos.image,
        codigo: autos.codigo,
        marca: autos.marca,
        modelo: autos.modelo,
        anio: autos.anio,
        color: autos.color,
        kilometraje: autos.kilometraje,
        precio: autos.precio,
        calificacion: autos.calificacion
      })),
      catchError((error: any) => {
        console.error('Error al obtener el vehículo:', error);
        return of(undefined);
      })
    );
  }

  agregarVehiculo(autos: Autos): Observable<any> {
    return this.http.post<any>(this.url + 'vehiculo/', autos);
  }

  actualizarVehiculo(codigo: Number, autos: Autos): Observable<any> {
    return this.http.put<any>(`${this.url}vehiculo/${codigo}`, autos);
  }

  eliminarVehiculo(codigo: Number): Observable<any> {
    return this.http.delete<any>(`${this.url}vehiculo/${codigo}`);
  }
}