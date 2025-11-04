import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonList, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormularioUsuarioComponentComponent } from 'src/app/componentes/formulario-usuario-component/formulario-usuario-component.component';
import { UsuariosDB } from 'src/app/data/services/usuarios-db';
import { Usuario } from 'src/app/data/interfaces/usuario.model';

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.page.html',
  styleUrls: ['./registro-formulario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormularioUsuarioComponentComponent]
})
export class RegistroFormularioPage implements OnInit {

  usuarioServices = inject(UsuariosDB)

  constructor() {}

  ngOnInit() {}

  guardarRegistro(data: Usuario){
    this.usuarioServices.listaUsuarioDB.push(data)
    console.log(this.usuarioServices.listaUsuarioDB)
  }
}
