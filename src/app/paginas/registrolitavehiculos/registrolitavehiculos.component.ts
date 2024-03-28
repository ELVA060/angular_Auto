import { Component, OnInit } from '@angular/core';
import { ServehiculosService } from '../../servicios/servehiculos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Autos } from '../../interfaceautos/autos';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registrolitavehiculos',
  templateUrl: './registrolitavehiculos.component.html',
  styleUrls: ['./registrolitavehiculos.component.css']
})
export class RegistrolitavehiculosComponent implements OnInit {
  formulario: FormGroup;
  

  constructor(private servehiculosService: ServehiculosService, private fb: FormBuilder, private Router:Router ) {

    this.formulario = this.fb.group({
      "codigo": ['', Validators.required],
      "marca": ['', Validators.required],
      "modelo": [],
      "anio": [],
      "color": [],
      "kilometraje": [],
      "precio": [],
      "calificacion": [],
    });
    
  }


  ngOnInit() {


  }
  guardar() {
    
    if (!this.formulario.valid) {
      console.log('Formulario inválido');
      this.formulario.markAllAsTouched();
    } else {
      let autos:Autos  = {...this.formulario.value};
      this.servehiculosService.agregarVehiculo(autos).subscribe(data => {
        console.log('Data:', data);
        if (!data) {
          alert('Error al guardar');
          return;
        }
      });
      console.log('Formulario', this.formulario.value);
      this.Router.navigate(['/vehiculos']);
    }
  }

}

