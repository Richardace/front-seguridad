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
  personaForm!: FormGroup;
  mostrarContrasena: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {



    const usuarioId = parseInt(this.router.snapshot.params['id']);
    this.usuarioService.darUsuario(Number(usuarioId)).subscribe((usuario) => {
      this.persona = usuario;
      this.personaForm = this.formBuilder.group({
        id: [this.persona.id, []],
        password: ["", [Validators.required, Validators.minLength(2)]],
        rol: [Number(this.persona.rol), Validators.required],
      });
    });
  }

  mostrarFormularioContrasena(){
    this.mostrarContrasena = true;
  }

  editarUsuario(persona: Usuario): void {
    this.usuarioService.editarUsuario(persona).subscribe((usuario) => {
      this.toastr.success("Confirmation", "Persona editada")
      this.personaForm.reset();
      this.routerPath.navigate(['/perfil']);
    },
    error => {
      if (error.statusText === "UNAUTHORIZED") {
        this.toastr.error("Error","Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if (error.statusText === "UNPROCESSABLE ENTITY") {
        this.toastr.error("Error","No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else if (error.error === "EXISTENT_USER") {
        this.toastr.error("Error","Este usuario ya existe")
      }
      else {
        this.toastr.error("Error","Ha ocurrido un error. " + error.message)
      }
    })
  }


}
