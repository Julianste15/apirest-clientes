import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
public proyecto:any={anio:2026,nombreProyecto:"Mi Primer Proyecto"};
public tecnologia:any={leyenda:'Desarrollado con',tc1:'Angular',tc2:'Spring-Spring Boot'};
public autor:string='Desarrollado por Julian';
}
