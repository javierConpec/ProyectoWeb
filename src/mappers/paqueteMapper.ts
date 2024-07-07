import { paquetes } from "@prisma/client";
import { IPaquete } from "../models/Paquete";

export const fromPrismaPaquete = (paquete: paquetes): any=>({
    idPaquete:paquete.id_paquete,
    nombre: paquete.nombre,
    transporte:paquete.transporte,
    precio:paquete.precio,

});

export const toPrismaPaquete = (paquete: IPaquete):any=> ({
    id_paquete: paquete.idPaquete,
    nombre: paquete.nombre,
    transporte:paquete.transporte,
    precio:paquete.precio,
    
})