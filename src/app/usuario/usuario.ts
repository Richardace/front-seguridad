export class Usuario {
    id: string;
    nombre: string;
    apellido: string;
    usuario: string;
    password: string;
    telefono: string;
    rol: number;

    public constructor(id: string, nombre: string, apellido:string, usuario: string, password:string, rol: number, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario
        this.password = password
        this.rol = rol
        this.telefono = telefono;
    }

    public toJSON() {
      return JSON.stringify({"id": this.id, "nombre": this.nombre, "apellido": this.apellido, "usuario":this.usuario, "rol": this.rol});
    }

    public static fromJSON(json: string) {
      var data = JSON.parse(json)
      return  new Usuario(data.id, data.nombre, data.apellido, data.usuario, data.password, data.rol, data.telefono);
    }

}
