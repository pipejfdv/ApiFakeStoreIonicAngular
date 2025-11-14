import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CarrucelProductosComponentComponent } from 'src/app/componentes/carrucel-productos-component/carrucel-productos-component.component';
import { ProductoServices } from 'src/app/data/services/producto-services';
import { Prodcuto } from 'src/app/data/interfaces/producto.model';
import { TabInicioComponent } from 'src/app/componentes/tab-inicio/tab-inicio.component';


@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.page.html',
  styleUrls: ['./carrito-compras.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CarrucelProductosComponentComponent, TabInicioComponent]
})
export class CarritoComprasPage implements OnInit {

  productoServices = inject(ProductoServices);
  listaProducto:Prodcuto[]=[]

  constructor() { }

  ngOnInit() {
    this.listaProducto = this.productoServices.listaProductosEnCompra
  }

}
