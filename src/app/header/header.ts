import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
public nombres:String="Juan";
public apellido:String="Perez";
public disciplina:String="Programacion";
public descripcion:String="Programador de software";
}
