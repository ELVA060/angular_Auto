import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {faStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnInit {
  faStar=faStar
  estrellasCalificacion:any[]=[]
  
  @Input() calificacion:number=0
    constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.estrellasCalificacion=[];
    for(let i=1;i<= this.calificacion;i++){this.estrellasCalificacion.push(i);}
    
  }

  ngOnInit() {
  }

}
