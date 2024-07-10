import { categorias, destinos, hospedajes, paises, paquetes, viajes } from "@prisma/client";
import { fromPrismaDestino } from "./destinoMapper";
import { fromPrismaPaquete } from "./paqueteMapper";
import { IViaje } from "../models/Viaje";

export const fromPrismaViaje = (
    viaje: viajes,
    paquete: paquetes,
    categoria: categorias,
    hospedaje: hospedajes,
    destino: destinos,
    pais: paises
): any => ({
    idViaje: viaje.id_viaje,
    destino: fromPrismaDestino(destino, pais),
    paquete: fromPrismaPaquete(paquete, categoria, hospedaje, destino, pais),
    fechaInicio: viaje.fecha_inicio,
    fechaFin: viaje.fecha_fin,
    tarifa: viaje.tarifa,
});

export const toPrismaViaje = (viaje: IViaje): any => ({
    id_destino: viaje.destino.idDestino,
    id_paquete: viaje.paquete.idPaquete,
    fecha_inicio: viaje.fechaInicio,
    fecha_fin: viaje.fechaFin,
    tarifa: viaje.tarifa,
});
