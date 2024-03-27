import { Injectable } from '@angular/core';
import { Autos } from '../interfaceautos/autos';


@Injectable({
  providedIn: 'root'
})
export class ServehiculosService {
  servlistauto: Autos[] = [{
    image: "https://www.chevrolet.com.ec/bypass/gmccontenthub/chevrolet/gm-ec/colorizer_joy_sedan/images/colorizer/joy-hb-negro-3-4F.png",
    codigo: "A001",
    marca: "Chevrolet",
    modelo: "Joy Sedán",
    anio: 2024,
    color: "negro",
    kilometraje: 0,
    precio: "17000",
    calificacion: 2,
  },
  {
    image: "https://assets-cdn.static-gm.com/Assets/83ec4933-56df-41a8-92b1-5366014876c6/a5908a34-214c-4f0c-b419-23933629d49d/v-1656471565/Desktop.webp",
    codigo: "A002",
    marca: "Chevrolet",
    modelo: "Onix Turbo RS",
    anio: 2024,
    color: "blanco",
    kilometraje: 0,
    precio: "17000",
    calificacion: 4,
  },
  {
    image: "https://vehicle-images.dealerinspire.com/stock-images/ford/5689dc835ebd59a2fd5a637d0e1bc678.png",
    codigo: "A003",
    marca: "Ford",
    modelo: "Escape platinum",
    anio: 2024,
    color: "negro",
    kilometraje: 0,
    precio: "20000",
    calificacion: 4,
  },
  {
    image: "https://www.toyocosta.com/wp-content/uploads/2022/08/raize-plata.png",
    codigo: "A003",
    marca: "Toyota",
    modelo: "Raize",
    anio: 2023,
    color: "plata",
    kilometraje: 0,
    precio: "22000",
    calificacion: 2,
  },
  ]
constructor() { }

}
