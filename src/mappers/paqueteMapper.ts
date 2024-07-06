import { categorias, destinos, hospedajes, paises, paquetes } from "@prisma/client";
import { IPaquete } from "../models/Paquete";
import { fromPrismaCategoria } from "./categoriaMapper";
import { fromPrismaHospedaje } from "./hospedajeMapper";

export const fromPrismaPaquete = (paquete: paquetes, categoria:categorias,hospedaje:hospedajes,destino:destinos, pais:paises): any=>({
    idPaquete:paquete.id_paquete,
    categoria:fromPrismaCategoria(categoria),
    hospedaje:fromPrismaHospedaje(hospedaje,destino,pais),
    nombre: paquete.nombre,
    transporte:paquete.transporte,
    precio:paquete.precio,

});

export const toPrismaPaquete = (paquete: IPaquete):any=> ({
    id_paquete: paquete.idPaquete,
    id_categoria:paquete.categoria.idCategoria,
    id_hospedaje:paquete.hospedaje.idHospedaje,
    nombre: paquete.nombre,
    transporte:paquete.transporte,
    precio:paquete.precio,
    
})