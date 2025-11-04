import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TabInicioComponent } from 'src/app/componentes/tab-inicio/tab-inicio.component';
import { FormularioUsuarioComponentComponent } from 'src/app/componentes/formulario-usuario-component/formulario-usuario-component.component';
import { Usuario } from 'src/app/data/interfaces/usuario.model';
import { UsuariosDB } from 'src/app/data/services/usuarios-db';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TabInicioComponent, FormularioUsuarioComponentComponent]
})
export class PerfilUsuarioPage implements OnInit {

  usuarioServices = inject(UsuariosDB)
  defectoImagen = "/assets/girl-8435340_1280.png"
  constructor() { }

  ngOnInit() {}

  actulizarDatosDeUsuario(data:Usuario){
    this.usuarioServices.actualizarUsuario(data)
  }
}
