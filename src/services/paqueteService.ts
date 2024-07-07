import { PrismaClient, paquetes } from "@prisma/client";
import { IPaquete } from "../models/Paquete";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaPaquete, toPrismaPaquete } from "../mappers/paqueteMapper";

const prisma = new PrismaClient();

export const insertarPaquete = async (paquete: IPaquete): Promise<string> => {
    await prisma.paquetes.create({
        data: {
            nombre: paquete.nombre,
            transporte: paquete.transporte,
            precio: paquete.precio,
            id_hospedaje: paquete.hospedaje.idHospedaje,

        }
    });
    return RESPONSE_INSERT_OK;
}

export const listarPaquetes = async (): Promise<IPaquete[]> => {
    const paquetes: paquetes[] = await prisma.paquetes.findMany({
        include: {
            hospedaje: true,
            categoria: true
        }
    });
    return paquetes.map((paquete: paquetes) => fromPrismaPaquete(paquete));
}

export const obtenerPaquete = async (idPaquete: number): Promise<IPaquete | null> => {
    const paquete: paquetes | null = await prisma.paquetes.findUnique({
        where: {
            id_paquete: idPaquete
        },
        include: {
            hospedaje: true,
            categoria: true
        }
    });
    if (paquete) {
        return fromPrismaPaquete(paquete);
    }
    return null;
}

export const modificarPaquete = async (idPaquete: number, paquete: IPaquete): Promise<string> => {
    await prisma.paquetes.update({
        where: {
            id_paquete: idPaquete
        },
        data: {
            nombre: paquete.nombre,
            transporte: paquete.transporte,
            precio: paquete.precio,
            hospedaje: {
                connect: {
                    id_hospedaje: paquete.idHospedaje
                }
            },
            categoria: {
                connect: {
                    id_categoria: paquete.idCategoria
                }
            }
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarPaquete = async (idPaquete: number): Promise<string> => {
    await prisma.paquetes.delete({
        where: {
            id_paquete: idPaquete
        }
    });
    return RESPONSE_DELETE_OK;
}
