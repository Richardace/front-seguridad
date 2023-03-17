import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: string = "";
  helper = new JwtHelperService();

  constructor(
    private usuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    sessionStorage.setItem('decodedToken', '');
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('idUsuario', '');
    sessionStorage.setItem('rol', '');
  }

  loginUsuario(usuario: string, contrasena: string) {
   this.error = ""

     this.usuarioService.login(usuario, contrasena)
     .subscribe(res => {
         sessionStorage.setItem('idUsuario', res.id);
         sessionStorage.setItem('rol', res.rol);
         var user = new Usuario(res.id, res.nombre, res.apellido, res.password, res.correo, res.rol, res.telefono );
         var userJSON = user.toJSON();
         sessionStorage.setItem('activeUser', userJSON)
         this.toastrService.success("Login ok", "Información", {closeButton: true});
         if(user.rol == 1) {
           this.router.navigate([`/otp`])
         }
       })
   }

    loginUsuarioI(usuario: string, contrasena: string) {
    this.toastrService.error("Usuario o contraseña incorrectos", "", {closeButton: true});
    this.router.navigate([`/otp`])
  }

}
