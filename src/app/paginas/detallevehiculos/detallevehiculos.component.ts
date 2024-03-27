import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServehiculosService } from '../../servicios/servehiculos.service';

@Component({
  selector: 'app-detallevehiculos',
  templateUrl: './detallevehiculos.component.html',
  styleUrls: ['./detallevehiculos.component.css']
})
export class DetallevehiculosComponent implements OnInit {

  autos: any; 


  constructor(private route: ActivatedRoute, private servicio:ServehiculosService) { }

  ngOnInit() {
    let codigo = String(this.route.snapshot.paramMap.get("codigo"));
    this.autos = this.servicio.getAuto(codigo);
  
  }

}
