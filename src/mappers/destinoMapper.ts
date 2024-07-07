import { destinos, paises } from "@prisma/client";
import { IDestino } from "../models/Destino";
import { fromPrismaPais } from "./paisMapper";

export const fromPrismaDestino = (destino: destinos, pais: paises): any => ({
    idDestino: destino.id_destino,
    pais: fromPrismaPais(pais),
    nombre: destino.nombre

});

export const toPrismaDestino = (destino: IDestino): any => ({
    id_pais: destino.pais.idPais,
    nombre: destino.nombre

});
