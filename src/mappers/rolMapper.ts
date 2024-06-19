import { roles } from "@prisma/client"
import { IRol } from "../models/Rol"

export const fromPrismaRol = (roles: roles): any =>({
    idRol: roles.id_rol,
    nombre: roles.nombre,
})

export const toPrismaRol = (roles: IRol): any =>({
    nombre: roles.nombre
})