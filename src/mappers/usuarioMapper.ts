import { roles,usuarios } from "@prisma/client";
import { IUsuario } from "../models/usuario";
import { fromPrismaRol } from "./rolMapper";

export const fromPrismaUsuario = (usuario: usuarios, rol:roles): any =>({
    idUsuario:usuario.id_usuario,
    rol:fromPrismaRol(rol),
    nombres:usuario.nombres,
    apellidoPaterno:usuario.apellido_paterno,
    apellidoMaterno:usuario.apellido_materno,
    userName:usuario.username,
    email:usuario.email,
    telefono:usuario.telefono,
    direccion:usuario.direccion,
    sexo:usuario.sexo,
    fechaCreacion:usuario.fecha_creacion
    
});

export const toPrismaUsuario = (usuario:IUsuario):any=>({
    id_usario:usuario.idUsuario,
    id_rol:usuario.rol.idRol,
    nombres:usuario.nombres,
    apellido_Paterno:usuario.apellidoPaterno,
    apellido_Materno:usuario.apellidoMaterno,
    username:usuario.username,
    email:usuario.email,
    telefono:usuario.telefono,
    direccion:usuario.direccion

})
 