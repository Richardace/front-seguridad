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
  }

  loginUsuario(usuario: string, contrasena: string) {
   this.error = ""

    this.usuarioService.login(usuario, contrasena)
     .subscribe((res: any) => {
         sessionStorage.setItem('token', res.accessToken);
         sessionStorage.setItem('email', usuario);
         this.toastrService.success("Login ok", "Información", {closeButton: true});
         this.router.navigate([`/listado-usuarios`])
        }, (err) => {
          if(err.status == 401){
            this.router.navigate([`/otp`])
          }else if(err.stauts = 404){
            this.toastrService.error("Usuario o contraseña incorrectos", "", {closeButton: true});
          }
        })
   }

}
