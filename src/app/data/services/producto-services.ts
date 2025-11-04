import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodcuto } from '../interfaces/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoServices {
  listaProductosEnCompra:Prodcuto[]=[];

  private http = inject(HttpClient)
  urlApi = "https://fakestoreapi.com/products"

  getAllProductosApi():Observable<Prodcuto[]>{
    return this.http.get<Prodcuto[]>(this.urlApi)
  }

  guardarProductoEnCarritoCompras(dato:Prodcuto){
    this.listaProductosEnCompra.push(dato)
  }

  eliminarProductoEnCarritoCompras(dato:Prodcuto){
    const indice = this.listaProductosEnCompra.findIndex(
      (objeto) => objeto.id == dato.id
    );
    this.listaProductosEnCompra.splice(indice, 1);

  }
}
