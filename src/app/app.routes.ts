import { Routes } from '@angular/router';
import { FormComponent } from './clientes/crearClientes/form.component';
import { Clientes } from './clientes/listarClientes/clientes'

export const routes: Routes = [
    { path: '', redirectTo: '/clientes/listarClientes', pathMatch: 'full' },
    { path: 'clientes/listarClientes', component: Clientes },
    { path: 'clientes/crearClientes', component: FormComponent },
];
