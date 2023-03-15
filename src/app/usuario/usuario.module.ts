import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ValidarOtpComponent } from './validar-otp/validar-otp.component';
import { EditarPermisosComponent } from './editar-permisos/editar-permisos.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    ValidarOtpComponent,
    EditarPermisosComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports:[
    LoginComponent,
    EditarPermisosComponent,
    ListadoUsuariosComponent,
    ValidarOtpComponent
  ],
})
export class UsuarioModule { }
