import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent {

  activeUser!: Usuario;
  usuarios: Array<any>=[]

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private usuarioService: UsuarioService) {

   }

  ngOnInit() {
    var jsonUser: any = sessionStorage.getItem('activeUser');
    this.activeUser = Usuario.fromJSON(jsonUser);
    this.usuarioService.darUsuarios().subscribe((usuarios) => {
      console.log(usuarios)
      this.usuarios=usuarios;
    })
  }

  usuarioEditar(usuarioId: any){
    this.router.navigate(['/usuario/editar/' + usuarioId]);
  }

}
