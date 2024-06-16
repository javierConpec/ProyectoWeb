import { roles } from "@prisma/client"
import { IRol } from "../models/Rol"

export const fromPrismaRol = (roles: roles): any =>({
    idRol: 1,
    nombre: roles.nombre,
})

export const toPrismaRol = (roles: IRol): any =>({
    nombre: roles.nombre
})