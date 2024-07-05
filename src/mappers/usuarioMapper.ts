import { roles,usuarios } from "@prisma/client";
import { IUsuario } from "../models/usuario";
import { fromPrismaRol } from "./rolMapper";

export const fromPrismaUsuario = (usuario: usuarios, rol:roles): any =>({
    idUsuario:usuario.id_usuario,
    rol:fromPrismaRol(rol),
    nombre:usuario.nombre,
    
})