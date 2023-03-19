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

    }


   validarOTP(otp: string) {
      var email:string = sessionStorage.getItem('email')!;
      this.usuarioService.validarOTP(otp, email)
        .subscribe((res) => {
          this.toastrService.success("Login ok", "Información", {closeButton: true});
          if(res == true) {
            this.router.navigate([`/listado-usuarios`])
          }else{
              this.toastrService.error("Codigo OTP Incorrecto", "", {closeButton: true});
            }
        },
          (error) => {
            this.toastrService.error("Codigo OTP Invalido", "", {closeButton: true});
          })
    }
}
