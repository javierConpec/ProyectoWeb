import { paises } from "@prisma/client";
import { IPais } from "../models/Pais";

export const fromPrismaPais = (pais: paises): any=>({
    idPais:1,
    nombre: pais.nombre,
})

export const toPrismaPais = (pais: IPais):any=> ({
    nombre: pais.nombre
})