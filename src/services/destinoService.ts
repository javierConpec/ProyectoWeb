import { PrismaClient } from "@prisma/client";
import { IDestino } from "../models/Destino";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaDestino, toPrismaDestino } from "../mappers/destinoMapper";

const prisma = new PrismaClient();

export const insertarDestino = async (destino: IDestino) => {
    try {
        await prisma.destinos.create({
            data: toPrismaDestino(destino)
        });
        return RESPONSE_INSERT_OK;
    } catch (error) {
        console.error('Error en insertarDestino:', error);
        throw new Error('No se pudo insertar el destino');
    }
}

export const listarDestinos = async () => {
    try {
        const destinos: any[] = await prisma.destinos.findMany({
            where: {
                estado_auditoria: '1'
            },
            include: {
                paises: true
            }
        });
        console.log('destinoService::destinos', destinos);
        return destinos.map((destino: any) => fromPrismaDestino(destino, destino.paises));
    } catch (error) {
        console.error('Error en listarDestinos:', error);
        throw new Error('No se pudieron listar los destinos');
    }
}

export const obtenerDestino = async (idDestino: number) => {
    try {
        const destino: any = await prisma.destinos.findUnique({
            where: {
                id_destino: idDestino
            },
            include: {
                paises: true
            }
        });
        return fromPrismaDestino(destino, destino.paises);
    } catch (error) {
        console.error('Error en obtenerDestino:', error);
        throw new Error('No se pudo obtener el destino');
    }
}

export const modificarDestino = async (idDestino: number, destino: IDestino) => {
    try {
        await prisma.destinos.update({
            data: {
                ...toPrismaDestino(destino),
                
            },
            where: {
                id_destino: idDestino
            }
        });
        return RESPONSE_UPDATE_OK;
    } catch (error) {
        console.error('Error en modificarDestino:', error);
        throw new Error('No se pudo modificar el destino');
    }
}

export const eliminarDestino = async (idDestino: number) => {
    try {
        console.log('destinoService::eliminarDestino', idDestino);
        await prisma.destinos.update({
            data: {
                estado_auditoria: '0',
                
            },
            where: {
                id_destino: idDestino
            }
        });
        return RESPONSE_DELETE_OK;
    } catch (error) {
        console.error('Error en eliminarDestino:', error);
        throw new Error('No se pudo eliminar el destino');
    }
}
