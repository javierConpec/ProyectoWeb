import { PrismaClient, hospedajes } from "@prisma/client";
import { IHospedaje } from "../models/Hospedaje";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK, RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaHospedaje, toPrismaHospedaje } from '../mappers/hospedajeMapper';

const prisma = new PrismaClient();

export const insertarHospedaje = async (hospedaje: IHospedaje) => {
    await prisma.hospedajes.create({
        data: toPrismaHospedaje(hospedaje)
    });
    return RESPONSE_INSERT_OK;
}

export const listarHospedajes = async () => {
    const hospedajes: any[] = await prisma.hospedajes.findMany({
        include: {
            destinos: {
                include: {
                    paises: true
                }
            }
        },
        where: {
            estado_auditoria: '1'
        }
    });

    console.log('hospedajeService::hospedajes', hospedajes);
    return hospedajes.map((hospedaje: any) => fromPrismaHospedaje(hospedaje, hospedaje.destinos, hospedaje.destinos.paises));
}

export const obtenerHospedaje = async (idHospedaje: number) => {
    const hospedaje: any = await prisma.hospedajes.findUnique({
        where: {
            id_hospedaje: idHospedaje,
            estado_auditoria: '1'
        },
        include: {
            destinos: {
                include: {
                    paises: true
                }
            }
        }
    });
    return fromPrismaHospedaje(hospedaje, hospedaje.destinos, hospedaje.destinos.paises);
}

export const modificarHospedaje = async (idHospedaje: number, hospedaje: IHospedaje) => {
    await prisma.hospedajes.update({
        data: toPrismaHospedaje(hospedaje),
        where: {
            id_hospedaje: idHospedaje
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarHospedaje = async (idHospedaje: number) => {
    console.log('hospedajeService::eliminarHospedaje', idHospedaje);
    await prisma.hospedajes.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_hospedaje: idHospedaje
        }
    });
    return RESPONSE_DELETE_OK;
}
