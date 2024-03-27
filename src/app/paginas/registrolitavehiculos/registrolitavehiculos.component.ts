import { Component, OnInit } from '@angular/core';
import { ServehiculosService } from '../../servicios/servehiculos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrolitavehiculos',
  templateUrl: './registrolitavehiculos.component.html',
  styleUrls: ['./registrolitavehiculos.component.css']
})
export class RegistrolitavehiculosComponent implements OnInit {
  formulario: FormGroup;
  constructor(private servehiculosService: ServehiculosService, private fb: FormBuilder) {

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
    
    console.log("formulario", this.formulario);
    if (this.formulario.valid) {alert("grabado con exito");
    
   
  
  }
 
  
}}
