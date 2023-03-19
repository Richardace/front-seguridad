import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService,
    private usuarioService: UsuarioService,
    private usuarioForm: FormGroup
  ) { }

  ngOnInit() {
  this.usuarioForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required, ]],
      usuario: ["", [Validators.required, ]],
      password: ["", [Validators.required, ]],
      telefono: ["", Validators.required],
      rol: ["", Validators.required]

     } );
  }

  crearUsuario(usuario: Usuario): void {
    this.usuarioService.crearUsuario(usuario).subscribe((usuario) => {
      this.toastr.success("Confirmation", "Persona creada")

      this.routerPath.navigate(['/persona/' + usuario.id]);
    },
    error => {
      if (error.statusText === "UNAUTHORIZED") {
        this.toastr.error("Error","Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if (error.statusText === "UNPROCESSABLE ENTITY") {
        this.toastr.error("Error","No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else {
        this.toastr.error("Error","Ha ocurrido un error. " + error.message)
      }
    })

  }

}
