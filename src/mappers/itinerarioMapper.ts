import { itinerarios_, viajes, hospedajes, paises, paquetes, destinos, categorias } from "@prisma/client";
import { IItinerario } from "../models/Itinerario";
import { fromPrismaViaje } from "./viajeMapper";


export const fromPrismaItinerario = (itinerario: itinerarios_, viaje:viajes, destino:destinos,paquete:paquetes,categoria:categorias,hospedaje:hospedajes,pais:paises): any=>({
    idItinerario:itinerario.id_itinerario,
    viaje:fromPrismaViaje(viaje,paquete,categoria,hospedaje,destino,pais),
    dia:itinerario.dia,
    horaInicio: itinerario.hora_inicio,
    horaFin:itinerario.hora_fin,
    actividad:itinerario.actividad,
    descripcion:itinerario.descripcion

});

export const toPrismaItinerario = (itinerario: IItinerario):any=> ({
    i_itinerario: itinerario.idItinerario,
    id_viaje:itinerario.viaje.idViaje,
    dia:itinerario.dia,
    hora_inicio: itinerario.horaInicio,
    hora_fin:itinerario.horaFin,
    actividad:itinerario.actividad,
    descripcion:itinerario.dscripcion
    
})