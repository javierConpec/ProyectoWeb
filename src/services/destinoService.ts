import { PrismaClient, destinos } from "@prisma/client";
import { IDestino } from "../models/Destino";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaDestino, toPrismaDestino } from "../mappers/destinoMapper";

const prisma = new PrismaClient();

export const insertarDestino = async (destino: IDestino) => {
    await prisma.destinos.create({
        data: toPrismaDestino(destino)
    });
    return RESPONSE_INSERT_OK;
}

export const listarDestinos = async () => {
    const destinos: any[] = await prisma.destinos.findMany({
        include: {
            paises:true
        }
    });
    console.log('destinoService::destinos', destinos);
    return destinos.map((destino: any) => fromPrismaDestino(destino, destino.paises));
}

export const obtenerDestino = async (idDestino: number) => {
    const destino: any = await prisma.destinos.findUnique({
        where: {
            id_destino: idDestino
        },
        include: {
            paises: true
        }
    });
    return fromPrismaDestino(destino, destino.paises);
}

export const modificarDestino = async (idDestino: number, destino: IDestino) => {
    await prisma.destinos.update({
        data: toPrismaDestino(destino),
        where: {
            id_destino: idDestino
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarDestino = async (idDestino: number) => {
    console.log('destinoService::eliminarDestino', idDestino);
    await prisma.destinos.update({
        data: {
            estado_auditoria:'0'
        },
        where:{
            id_destino:idDestino
        }
    })
    return RESPONSE_DELETE_OK;
}
