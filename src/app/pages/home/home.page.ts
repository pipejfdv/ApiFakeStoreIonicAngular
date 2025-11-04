import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonTabs, IonTab, IonTabBar, IonTabButton, IonButtons, IonButton } from '@ionic/angular/standalone';
import { CarrucelProductosComponentComponent } from 'src/app/componentes/carrucel-productos-component/carrucel-productos-component.component';
import { TabInicioComponent } from 'src/app/componentes/tab-inicio/tab-inicio.component';
import { Prodcuto } from 'src/app/data/interfaces/producto.model';
import { ProductoServices } from 'src/app/data/services/producto-services';
import { UsuariosDB } from 'src/app/data/services/usuarios-db';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CarrucelProductosComponentComponent, IonIcon, IonButtons, IonButton, TabInicioComponent],
})
export class HomePage implements OnInit{

  route = inject(Router)
  productoServices = inject(ProductoServices);
  usuarioServices = inject(UsuariosDB);

  nombreUsuario =  this.usuarioServices.usuarioLogueado.nombre
  listaProductos:Prodcuto[]=[]

  constructor() {}

  ngOnInit() {
    this.solicitarProdcutosApi();
  }

  solicitarProdcutosApi(){
    this.productoServices.getAllProductosApi().subscribe({
      next: (dato) => {
        dato.forEach(p => {
          const producto:Prodcuto={
            id: p.id,
            title: p.title,
            price: p.price,
            description: p.description,
            category: p.category,
            image: p.image,
            rating:{
              rate:p.rating.rate,
              count:p.rating.count
            }
          }
          this.listaProductos.push(producto);
        });
      },
      error:(err) =>{
        console.log("Error en la petición " + err)
      }
    })
  }

  salir(){
    this.route.navigate(['/ingreso-registro'])
  }
}
