import { CommonModule } from '@angular/common';
import{Cliente} from './cliente';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
 clientes:Cliente[]=[]

  ngOnInit():void{

    this.clientes=[

      {id:1,nombre:'Juan',apellido:'Perez',email:'juan@unicauca.edu.co',createAt:'2021-0-14'},
      {id:2,nombre:'Andres',apellido:'Sanchez',email:'andres@unicauca.edu.co',createAt:'2022-06-14'},
      {id:1,nombre:'Pedro',apellido:'Cortez',email:'pedro@unicauca.edu.co',createAt:'2018-02-14'}
    ]
  }
}