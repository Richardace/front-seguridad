import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPermisosComponent } from './usuario/editar-permisos/editar-permisos.component';
import { ListadoUsuariosComponent } from './usuario/listado-usuarios/listado-usuarios.component';
import { LoginComponent } from './usuario/login/login.component';
import { ValidarOtpComponent } from './usuario/validar-otp/validar-otp.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'otp', component: ValidarOtpComponent, pathMatch: 'full' },
  { path: 'listado-usuarios', component: ListadoUsuariosComponent, pathMatch: 'full' },
  { path: 'usuario/editar/:id/:rol', component: EditarPermisosComponent,  pathMatch: 'full' },
  // { path: 'usuario/crear', component: CrearComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
