import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Clientes } from './clientes/listarClientes/clientes';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='miPrimerProyecto';
}
