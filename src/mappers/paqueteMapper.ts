import { paquetes } from "@prisma/client";
import { IPaquete } from "../models/Paquete";

export const fromPrismaPaquete = (paquete: paquetes): any=>({
    idPaquete:paquete.id_paquete,
    nombre: paquete.nombre,
<<<<<<< HEAD
    descripcion: paquete.descripcion,
})

export const toPrismaPaquete = (paquete: IPaquete):any=> ({
    nombre: paquete.nombre,
    descripcion: paquete.descripcion,
=======
    transporte:paquete.transporte,
    precio:paquete.precio,

});

export const toPrismaPaquete = (paquete: IPaquete):any=> ({
    id_paquete: paquete.idPaquete,
    nombre: paquete.nombre,
    transporte:paquete.transporte,
    precio:paquete.precio,
    
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
})