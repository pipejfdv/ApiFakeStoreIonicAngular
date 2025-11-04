import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'ingreso-registro',
    pathMatch: 'full',
  },
  {
    path: 'ingreso-registro',
    loadComponent: () => import('./pages/ingreso-registro/ingreso-registro.page').then( m => m.IngresoRegistroPage)
  },
  {
    path: 'registro-formulario',
    loadComponent: () => import('./pages/registro-formulario/registro-formulario.page').then( m => m.RegistroFormularioPage)
  },
  {
    path: 'carrito-compras',
    loadComponent: () => import('./pages/carrito-compras/carrito-compras.page').then( m => m.CarritoComprasPage)
  },
  {
    path: 'perfil-usuario',
    loadComponent: () => import('./pages/perfil-usuario/perfil-usuario.page').then( m => m.PerfilUsuarioPage)
  },
];
