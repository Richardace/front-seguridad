import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-editar-permisos',
  templateUrl: './editar-permisos.component.html',
  styleUrls: ['./editar-permisos.component.css']
})
export class EditarPermisosComponent {

  persona!: Usuario
  mostrarContrasena: boolean = false;
  correoUsuario: string = "";
  rolUsuario: string = "";
  botonInicial: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.correoUsuario = this.router.snapshot.params['id'];
    this.rolUsuario = this.router.snapshot.params['rol'];
  }

  mostrarFormularioContrasena(){
    this.mostrarContrasena = true;
  }


  solicitarOTPInicio(rol:string):void{
    var email:string = sessionStorage.getItem('email')!;
    this.usuarioService.enviarOTPUpdate(email, rol)
    .subscribe((res: any) => {
      this.botonInicial = false;
        this.mostrarFormularioContrasena();
       })
  }

  solicitarOTP(rol:string, otp:string):void{
    var email:string = sessionStorage.getItem('email')!;
    this.usuarioService.enviarOTPUpdatevalidado(email, rol, otp)
    .subscribe((res: any) => {
      this.toastr.success("Rol Actualizado Correctamente", "Información", {closeButton: true});
      this.routerPath.navigate([`/listado-usuarios`])
    }, (err:any) => {
      this.toastr.error("Codigo OTP Invalido", "", {closeButton: true});
    })
  }

  // this.routerPath.navigate([`/listado-usuarios`])

}
