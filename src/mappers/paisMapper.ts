import { pais } from "@prisma/client";
import { IPais } from "../models/Pais";

export const fromPrismaPais = (pais: pais): any=>({
    idRol:1,
    nombre: pais.nombre,
    estado:pais.estado,
    fechaCreacion: pais.fecha_creacion,
    fechaModificacion: pais.fecha_modificacion
})

export const toPrismaPais = (pais: IPais):any=> ({
    nombre: pais.nombre
})