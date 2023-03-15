import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-validar-otp',
  templateUrl: './validar-otp.component.html',
  styleUrls: ['./validar-otp.component.css']
})
export class ValidarOtpComponent {

  error: string = "";

  constructor(
    private usuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router) { }


    ngOnInit() {
      let telefono: any = sessionStorage.getItem('telefono');
      // this.usuarioService.enviarOTP(telefono)
      // .subscribe(res => {

      // },
      // error => {
      //   this.toastrService.error("Usuario o contraseña incorrectos", "", {closeButton: true});
      // })

    }


   // validarOTP(otp: string) {
  //   this.error = ""
        // let usuario = sessionStorage.getItem('usuario');
  //   this.usuarioService.enviarOTP(otp, usuario)
  //     .subscribe(res => {
  //       this.toastrService.success("Login ok", "Información", {closeButton: true});
  //       if(res == true) {
  //         this.router.navigate([`/listadoUsuarios`])
  //       }else{
          //   this.toastrService.error("Codigo OTP Incorrecto", "", {closeButton: true});
          // }
  //     },
  //       error => {
  //         this.error = "Usuario o contraseña incorrectos";
  //       })
  // }

  validarOTP(otp: string) {
    this.error = ""

    this.router.navigate([`/listado-usuarios`])
  }

}
