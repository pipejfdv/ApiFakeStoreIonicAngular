import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormularioProductoComponent } from 'src/app/componentes/formulario-producto/formulario-producto.component';

@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.page.html',
  styleUrls: ['./venta-productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FormularioProductoComponent]
})
export class VentaProductosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
