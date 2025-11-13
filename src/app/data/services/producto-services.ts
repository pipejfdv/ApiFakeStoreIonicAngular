import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodcuto } from '../interfaces/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoServices {
  listaProductosEnCompra:Prodcuto[]=[];
  listadoDeProductos:Prodcuto[]=[];

  private http = inject(HttpClient)
  urlApi = "https://fakestoreapi.com/products"

  getAllProductosApi():Observable<Prodcuto[]>{
    return this.http.get<Prodcuto[]>(this.urlApi)
  }

  postProductoApi(data: Prodcuto):Observable<Prodcuto>{
    return this.http.post<Prodcuto>(this.urlApi, data)
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

  guardarProductoEnFormulario(data: Prodcuto){
    this.listadoDeProductos.push(data)
  }
}
