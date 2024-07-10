import { PrismaClient, viajes } from "@prisma/client";
import { IViaje } from "../models/Viaje";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK, RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaViaje, toPrismaViaje } from "../mappers/viajeMapper";

const prisma = new PrismaClient();

export const insertarViaje = async (viaje: IViaje) => {
    await prisma.viajes.create({
        data: toPrismaViaje(viaje)
    });
    return RESPONSE_INSERT_OK;
};

export const listarViajes = async () => {
    try {
        const viajes: viajes[] = await prisma.viajes.findMany({
            include: {
                destinos:{
                    include:{
                        paises:true,
                    }
                },
                paquetes: {
                    include:{
                        categorias:true,
                        hospedajes:true
                    }
                }
            },
            where: {
                estado_auditoria: '1'
            }
        });

        console.log('viajeService::viajes', viajes);
        return viajes.map((viaje: any) => fromPrismaViaje(
            viaje,
            viaje.paquetes,
            viaje.paquetes.hospedajes,
            viaje.paquetes.categorias,
            viaje.destinos,
            viaje.destinos.paises
        ));
    } catch (error) {
        console.error('Error al listar viajes:', error);
       
    }
}

export const obtenerViaje = async (idViaje: number) => {
    console.log('viajeService::obtenerViaje', idViaje);

    const viaje: any = await prisma.viajes.findUnique({
        where: {
            id_viaje: idViaje
        },
        include: {
            destinos: {
                include: {
                    paises: true
                }
            },
            paquetes: true
        }
    });

    if (!viaje) {
        throw new Error(`No se encontró el viaje con ID ${idViaje}`);
    }

    return fromPrismaViaje(
        viaje,
        viaje.paquetes,
        viaje.categorias,
        viaje.hospedajes,
        viaje.hospedajes.destinos,
        viaje.hospedajes.destinos?.paises
    );
}

export const modificarViaje = async (idViaje: number, viaje: IViaje) => {
    console.log('viajeService::modificarViaje', idViaje, viaje);

    await prisma.viajes.update({
        data: toPrismaViaje(viaje),
        where: {
            id_viaje: idViaje
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarViaje = async (idViaje: number) => {
    console.log('viajeService::eliminarViaje', idViaje);

    await prisma.viajes.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_viaje: idViaje
        }
    });
    return RESPONSE_DELETE_OK;
}
