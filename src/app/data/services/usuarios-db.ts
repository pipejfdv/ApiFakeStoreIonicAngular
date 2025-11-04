import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/data/interfaces/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuariosDB {
  listaUsuarioDB:Usuario[]=[]

  usuarioLogueado:Usuario

  actualizarUsuario(dato:Usuario){
    const indice = this.listaUsuarioDB.findIndex(
      (objeto) => objeto.id == dato.id
    );
    this.listaUsuarioDB[indice] = dato
  }
}
