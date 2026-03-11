import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Clientes } from './clientes/clientes';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Header,Footer,Clientes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='miPrimerProyecto';
}
