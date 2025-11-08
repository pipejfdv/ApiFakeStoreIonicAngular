import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab-inicio',
  templateUrl: './tab-inicio.component.html',
  styleUrls: ['./tab-inicio.component.scss'],
  standalone:true,
  imports:[IonCol, IonGrid, IonRow, IonButton, IonIcon]
})
export class TabInicioComponent  implements OnInit {
  
  router = inject(Router)
  constructor() { }

  ngOnInit() {}

  paginaCarrito(){
    this.router.navigate(['/carrito-compras']);
  }

  paginaHome(){    
    this.router.navigate(['/home']);
  }

  paginaPerfil(){
    this.router.navigate(['/perfil-usuario']);
  }

  paginaVentas(){
    this.router.navigate(['/venta-productos']);
  }
}
