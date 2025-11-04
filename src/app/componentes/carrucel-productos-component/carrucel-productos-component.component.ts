import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonButton, AlertController } from '@ionic/angular/standalone';
import { Prodcuto } from 'src/app/data/interfaces/producto.model';
import { ProductoServices } from 'src/app/data/services/producto-services';

@Component({
  selector: 'app-carrucel-productos-component',
  templateUrl: './carrucel-productos-component.component.html',
  styleUrls: ['./carrucel-productos-component.component.scss'],
  standalone: true,
  imports:[IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonButton]
})
export class CarrucelProductosComponentComponent implements OnInit {

  proctoServices = inject(ProductoServices)
  
  private alertCompra = inject(AlertController)
  @Input() listaDeRecepcion:Prodcuto[]
  @Input() vistaCarrito?:boolean = false

  constructor() {}

  ngOnInit() {}


  async comprarProducto(producto:Prodcuto) {
    const alert = await this.alertCompra.create({
      header: 'Confirmación de compra',
      message: '¿Deseas comprar el producto'+ producto.title + 'por $'+producto.price+'?',
      buttons: [
        {
          text: 'Comprar',
          handler: ()=>{
            this.proctoServices.listaProductosEnCompra.push(producto)
          }
        },
        {
          text: 'Cancelar'
        }
      ],
    });

    await alert.present();
  }

  async eliminarProducto(producto:Prodcuto){
    const alert = await this.alertCompra.create({
      header: 'Confirmación de eliminación',
      message: '¿Seguro de eliminar el producto del carrito '+producto.title+'?',
      buttons:[
        {
          text: 'Eliminar',
          handler: ()=>{
            this.proctoServices.eliminarProductoEnCarritoCompras(producto);
            console.log(this.proctoServices.listaProductosEnCompra)
          }
        },
        {
          text: 'Cancelar'
        }
      ]
    });
    await alert.present();
  }
}
