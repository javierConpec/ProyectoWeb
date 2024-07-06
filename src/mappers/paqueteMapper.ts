import { paquetes } from "@prisma/client";
import { IPaquete } from "../models/Paquete";

export const fromPrismaPaquete = (paquete: paquetes): any=>({
    idPaquete:paquete.id_paquete,
    nombre: paquete.nombre,
    descripcion: paquete.descripcion,
})

export const toPrismaPaquete = (paquete: IPaquete):any=> ({
    nombre: paquete.nombre,
    descripcion: paquete.descripcion,
})