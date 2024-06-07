import { roles } from "@prisma/client"
import { IRol } from "../models/Rol"

export const fromPrismaRol = (roles: roles): any =>({
    idRol: 1,
    nombre: roles.nombre,
    estado: roles.estado,
    fechaCreacion: roles.fecha_creacion,
    fechaModificacion: roles.fecha_modificacion
})

export const toPrismaRol = (roles: IRol): any =>({
    nombre: roles.nombre
})