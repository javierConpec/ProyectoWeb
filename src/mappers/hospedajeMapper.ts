import { hospedajes,destinos, paises } from "@prisma/client";
import { IHospedaje } from "../models/Hospedaje";
import { fromPrismaDestino } from "./destinoMapper";


export const fromPrismaHospedaje=(hospedaje:hospedajes,destino:destinos, pais:paises):any=>({
    idHospedaje:hospedaje.id_hospedaje,
    destino:fromPrismaDestino(destino,pais),
    nombre:hospedaje.nombre,
    precio:hospedaje.precio
});

export const toPrismaHospedaje=(hospedaje:IHospedaje):any=>({
    id_hospedaje:hospedaje.idHospedaje,
    destino:{
        connect:{
            id_destino: hospedaje.destino
        }
    },
    nombre:hospedaje.nombre,
    precio:hospedaje.precio
})