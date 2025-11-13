import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormularioProductoComponent } from 'src/app/componentes/formulario-producto/formulario-producto.component';
import { Prodcuto } from 'src/app/data/interfaces/producto.model';
import { ProductoServices } from 'src/app/data/services/producto-services';
import { CarrucelProductosComponentComponent } from 'src/app/componentes/carrucel-productos-component/carrucel-productos-component.component';
import { TabInicioComponent } from 'src/app/componentes/tab-inicio/tab-inicio.component';

@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.page.html',
  styleUrls: ['./venta-productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FormularioProductoComponent, CarrucelProductosComponentComponent, TabInicioComponent]
})
export class VentaProductosPage implements OnInit {

  servicioProducto = inject(ProductoServices);
  listaProductosCreados:Prodcuto[]=[];
  constructor() { }

  ngOnInit() {
  }

  guardarProducto(data: Prodcuto){
    this.listaProductosCreados.push(data)
    this.servicioProducto.guardarProductoEnFormulario(data)
    this.servicioProducto.postProductoApi(data).subscribe({
      next:(informacion)=>{
        console.log("producto creado", informacion)
      },
      error:(err)=>{
        console.log("Error al crear producto", err)
      }
    })
  }
}
