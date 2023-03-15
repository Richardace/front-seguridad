import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = "endpoint";

  constructor(private http: HttpClient) { }

  // login(usuario: string, contrasena: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/login`, { "usuario": usuario, "contrasena": contrasena });
  // }

  // enviarOTP(telefono: string): Observable<any>{
  //   return this.http.post<any>(`${this.apiUrl}/enviarOTP`, { "telefono": telefono});
  // }

  // validarOTP(otp: string, usuario: string): Observable<any>{
  //   return this.http.get<any>(`${this.apiUrl}/validarOTP`, { "otp": otp, "usuario":"usuario"});
  // }

  darUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/persona/${id}`)
  }

  editarUsuario(persona: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/perfil/${persona.id}`, persona)
  }

  darUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`)
  }

  login(usuario: string, contrasena: string): any {
    return true;
  }

  enviarOTP(telefono: string): any{
    return true;
  }

  validarOTP(otp: string, usuario: string): any{
    return true;
  }


}
