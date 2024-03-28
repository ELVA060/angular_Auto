import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServehiculosService } from '../../servicios/servehiculos.service';
import { Autos } from '../../interfaceautos/autos';

@Component({
  selector: 'app-detallevehiculos',
  templateUrl: './detallevehiculos.component.html',
  styleUrls: ['./detallevehiculos.component.css']
})
export class DetallevehiculosComponent implements OnInit {
  auto: any; 


  constructor(private route: ActivatedRoute, private servicio: ServehiculosService) { }

  ngOnInit() {
    let codigo = String(this.route.snapshot.paramMap.get("codigo"));
    this.auto = this.servicio.getAuto(codigo).subscribe(auto => { // Suscríbete al Observable
      this.auto = auto; 
      console.log(this.auto);
    });
  }
}
    