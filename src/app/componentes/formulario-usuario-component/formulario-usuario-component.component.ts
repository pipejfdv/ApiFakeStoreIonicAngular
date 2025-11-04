import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonList, IonRow, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { IonCheckbox } from '@ionic/angular/standalone';
import { Usuario } from 'src/app/data/interfaces/usuario.model';
import { UsuariosDB } from 'src/app/data/services/usuarios-db';

@Component({
  selector: 'app-formulario-usuario-component',
  templateUrl: './formulario-usuario-component.component.html',
  styleUrls: ['./formulario-usuario-component.component.scss'],
  standalone:true,
  imports:[IonGrid, IonRow, IonCol, IonInput, IonItem, IonList, IonSelect, IonSelectOption, IonButton, IonCheckbox, FormsModule, ReactiveFormsModule]
})
export class FormularioUsuarioComponentComponent  implements OnInit {

  usuariosServices = inject(UsuariosDB);
  route = inject(Router);
  private fb = inject(FormBuilder);
  datosDelUsuario:Usuario;
  idAumento = 1;

  @Input() modoEdicion:boolean;
  @Output() datosDelUsuarioParaActualizarYCrear = new EventEmitter<Usuario>();

  formularioRegistro:FormGroup;
  
  ciudades:{ id: number; ciudad: string }[] = 
  [ { id: 1, ciudad: "Bogotá" },
  { id: 2, ciudad: "Cartagena" },
  { id: 3, ciudad: "Medellín" },
  { id: 4, ciudad: "Cali" },
  { id: 5, ciudad: "Barranquilla" },
  { id: 6, ciudad: "Bucaramanga" },
  { id: 7, ciudad: "Pereira" },
  { id: 8, ciudad: "Popayán" },
  { id: 9, ciudad: "Cúcuta" },
  { id: 10, ciudad: "Santa Marta" },
  { id: 11, ciudad: "Tunja" },
  { id: 12, ciudad: "Neiva" },
  { id: 13, ciudad: "Villa de Leyva" },
  { id: 14, ciudad: "Zipaquirá" },
  { id: 15, ciudad: "Girardot" },
  { id: 16, ciudad: "Quibdó" },
  { id: 17, ciudad: "Magangué" },
  { id: 18, ciudad: "Guaduas" },
  { id: 19, ciudad: "Ambalema" },
  { id: 20, ciudad: "El Banco" },
  { id: 21, ciudad: "Mompox" },
  { id: 22, ciudad: "Santafé de Antioquia" },
  { id: 23, ciudad: "Calamar" },
  { id: 24, ciudad: "Cunday" }];

  constructor() {}

  ngOnInit() {
    this.datosDelUsuario = this.usuariosServices.usuarioLogueado;
    this.validacionFormulario();
    if(this.modoEdicion == true){
      this.formularioRegistro.get("terminosAceptados").setValue(true);
    }
  }

  get nombres() {
    return this.formularioRegistro.get('nombres');
  }
  get apellidos() {
    return this.formularioRegistro.get('apellidos');
  }
  get edad() {
    return this.formularioRegistro.get('edad');
  }
  get ciudad() {
    return this.formularioRegistro.get('ciudad');
  }
  get direccion() {
    return this.formularioRegistro.get('direccion');
  }
  get correo() {
    return this.formularioRegistro.get('correo');
  }
  get contrasena() {
    return this.formularioRegistro.get('contrasena');
  }
  get celular() {
    return this.formularioRegistro.get('celular');
  }
  get terminosAceptados() {
    return this.formularioRegistro.get('terminosAceptados');
  }


  registroEnUsuarioDB(){
    const info:Usuario={
      id: this.idAumento++,
      nombre: this.nombres.value,
      apellido: this.apellidos.value,
      edad: this.edad.value,
      ciudad: this.ciudad.value,
      direccion: this.direccion.value,
      correo: this.correo.value,
      contrasena: this.contrasena.value,
      celular: this.celular.value,
      terminosYCondiciones: this.terminosAceptados.value
    }
    this.datosDelUsuarioParaActualizarYCrear.emit(info);
    this.formularioRegistro.reset();
    this.route.navigate(['/ingreso-registro']);
  }

  validacionFormulario(){
    this.formularioRegistro = this.fb.group({
      nombres: [this.datosDelUsuario?.nombre || '', [
        Validators.required,
        Validators.maxLength(150),
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*')
      ]],
      apellidos: [this.datosDelUsuario?.apellido || '', [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*')
      ]],
      edad: [this.datosDelUsuario?.edad || null, [
        Validators.required,
        Validators.min(18),
        Validators.max(50)
      ]],
      ciudad: [this.datosDelUsuario?.ciudad || '', Validators.required],
      direccion: ['', [
        Validators.required,
        Validators.maxLength(250),
        Validators.minLength(5)
      ]],
      correo: [this.datosDelUsuario?.correo || '', [
        Validators.email,
        Validators.required
      ]],
      contrasena: ['', [
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(8)
      ]],
      celular: [this.datosDelUsuario?.celular || '', [
        Validators.maxLength(10),
        Validators.minLength(7)
      ]],
      terminosAceptados: [false, [
        Validators.requiredTrue
      ]]
    });
  }
  
  cancelarRegistro(){
    this.route.navigate(['/ingreso-registro']);
  }

}
