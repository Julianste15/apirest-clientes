import { Component } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Cliente } from '../../modelos/cliente';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, SweetAlert2Module, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  public cliente: Cliente = new Cliente();
  public titulo: String = 'Crear cliente';

  constructor(private clienteService: ClienteService, private router: Router) { }

  public crearCliente() {
    console.log("Creando cliente");
    this.clienteService.create(this.cliente).subscribe(
      response => {
        console.log("Cliente creado exitosamente");
        console.log(this.cliente);
        this.router.navigate(['/clientes/listarClientes']);
        Swal.fire('Cliente creado', `Cliente ${response.nombre} creado con éxito`, 'success');
      }
    );
  }
}
