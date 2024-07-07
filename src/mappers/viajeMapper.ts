import { categorias, destinos, hospedajes, paises, paquetes, viajes } from "@prisma/client";
import { fromPrismaCategoria } from "./categoriaMapper";
import { fromPrismaHospedaje } from "./hospedajeMapper";
import { fromPrismaDestino } from "./destinoMapper";
import { fromPrismaPaquete } from "./paqueteMapper";
import { IViaje } from "../models/Viaje";

export const fromPrismaViaje = (viaje:viajes ,paquete: paquetes, categoria:categorias,hospedaje:hospedajes,destino:destinos, pais:paises): any=>({
    idViaje:viaje.id_viaje,
    destino:fromPrismaDestino(destino,pais),
    categoria:fromPrismaCategoria(categoria),
    hospedaje:fromPrismaHospedaje(hospedaje,destino,pais),
    paquete:fromPrismaPaquete(paquete,categoria,hospedaje,destino,pais),
    fechaInicio: viaje.fecha_inicio,
    fechaFin:viaje.fecha_fin,
    tarifa:viaje.tarifa,

});

export const toPrismaViaje = (viaje: IViaje):any=> ({
    id_viaje: viaje.idViaje,
    id_destino:viaje.destino.idDestino,
    id_categoria:viaje.categoria.idCategoria,
    id_hospedaje:viaje.hospedaje.idHospedaje,
    id_paquete:viaje.paquete.idPaquete,
    fecha_inicio: viaje.fechaInicio,
    fecha_fin:viaje.fechaFin,
    tarifa:viaje.tarifa,
    
})