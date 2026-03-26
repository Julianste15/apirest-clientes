import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../servicios/cliente.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterLink, SweetAlert2Module],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {
  clientes: Cliente[] = [];

  constructor(private objClienteService: ClienteService) { }

  ngOnInit(): void {
    this.objClienteService.getClientes().subscribe(
      clientes => {
        console.log("Listando clientes");
        this.clientes = clientes;
      }
    );
  }
}