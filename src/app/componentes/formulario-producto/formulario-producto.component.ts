import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Prodcuto } from 'src/app/data/interfaces/producto.model';
import { ProductoServices } from 'src/app/data/services/producto-services';
import { IonGrid, IonCol, IonInput, IonButton, IonRow } from '@ionic/angular/standalone';


@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss', '../../../../src/global.scss'],
  standalone:true,
  imports:[IonGrid, IonCol, IonInput, IonButton, IonRow, FormsModule, ReactiveFormsModule]
})
export class FormularioProductoComponent  implements OnInit {

  productoServices = inject(ProductoServices);
  private fb = inject(FormBuilder);

  formularioRegistroProducto:FormGroup
  @Output() prodcutoCreado = new EventEmitter <Prodcuto>();
  idRandom = Math.floor((Math.random()*100)+1);

  constructor() {}


get titulo() {
  return this.formularioRegistroProducto.get('titulo');
}

get precio() {
  return this.formularioRegistroProducto.get('precio');
}

get descripcion() {
  return this.formularioRegistroProducto.get('descripcion');
}

get categoria() {
  return this.formularioRegistroProducto.get('categoria');
}

get imagen() {
  return this.formularioRegistroProducto.get('imagen');
}

get unidades() {
  return this.formularioRegistroProducto.get('unidades');
}


  ngOnInit() {
    this.validacionFormularioProducto();
  }

  registroProducto(){
    const producto:Prodcuto={
      id:this.idRandom,
      title: this.titulo.value,
      price: this.precio.value,
      description: this.descripcion.value,
      category: this.categoria.value,
      image: this.imagen.value,
      rating: {
        rate: 0,
        count: this.unidades.value
      } 
    }
    this.prodcutoCreado.emit(producto);
    this.formularioRegistroProducto.reset();
  }


  validacionFormularioProducto(){
    this.formularioRegistroProducto = this.fb.group({
      titulo:['',[
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*')
      ]],
      precio:['',[
        Validators.required,
      ]],
      descripcion:['',[
        Validators.maxLength(250)
      ]],
      categoria: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      imagen:[''],
      unidades:[null, [
        Validators.required,
        Validators.min(1)
      ]]
    })
  }

}
