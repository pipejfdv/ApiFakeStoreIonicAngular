import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonInput, IonTitle, IonToolbar, IonAlert } from '@ionic/angular/standalone';
import { UsuariosDB } from 'src/app/data/services/usuarios-db';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/data/interfaces/usuario.model';


@Component({
  selector: 'app-ingreso-registro',
  templateUrl: './ingreso-registro.page.html',
  styleUrls: ['./ingreso-registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonAlert]
})
export class IngresoRegistroPage implements OnInit {

  usuarioServices = inject(UsuariosDB)
  router = inject(Router)
  private alertController= inject (AlertController)

  correo:string='';
  password:string='';

  constructor() { }

  ngOnInit() {
  }

  registrar(){
    this.router.navigate(['/registro-formulario']);
  }

  validarCredenciales(){
    const usuarioEncontrado = this.usuarioServices.listaUsuarioDB.find(
      usuario => usuario.correo == this.correo && usuario.contrasena == this.password
    );
    
    if (usuarioEncontrado){
      this.usuarioServices.usuarioLogueado = usuarioEncontrado
      this.router.navigate(['/home']);
    }
    else{
      this.presentAlert();
    } 
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso',
      subHeader: '',
      message: 'Las credenciales ingresadas no son correctas',
      buttons: ['Continuar'],
    });

    await alert.present();
  }
}
