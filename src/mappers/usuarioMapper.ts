import { usuarios, roles } from "@prisma/client";
import { IUsuario } from "../models/Usuario";
import { fromPrismaRol } from "./rolMapper";

export const fromPrismaUsuario = (usuarios: usuarios, rol: roles): any=>({
    idUsuario: usuarios.id_usuario,
    rol: fromPrismaRol(rol),
    nombre: usuarios.nombres,
    apellidoPaterno: usuarios.apellido_paterno,
    apellidoMaterno: usuarios.apellido_materno,
    username: usuarios.username,
    email: usuarios.email,
    clave: usuarios.clave,
    telefono: usuarios.telefono,
    direccion: usuarios.direccion,
    sexo: usuarios.sexo
})

export const toPrismaUsuario = (usuarios: IUsuario):any=> ({
    id_rol: usuarios.rol.idRol,
    nombres: usuarios.nombres,
    apellido_paterno: usuarios.apellidoPaterno,
    apellido_materno: usuarios.apellidoMaterno,
    username: usuarios.username,
    email: usuarios.email,
    clave: usuarios.clave,
    telefono: usuarios.telefono,
    direccion: usuarios.direccion,
    sexo: usuarios.sexo,
})