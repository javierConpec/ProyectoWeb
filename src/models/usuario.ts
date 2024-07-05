import {IRol} from "./Rol";

export interface IUsuario {
    idUsuario:number;
    rol:IRol;
    nombres:string;
    apellidoPaterno:string;
    apellidoMaterno:string;
    username:string;
    email:string;
    clave:string;
    telefono:string;
    direccion:string;
    sexo:string;
    estadoAuditoria:string;
    fechaCreacion:Date;
    fechaModificacion:Date;
}

