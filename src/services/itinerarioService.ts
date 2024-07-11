import { PrismaClient, itinerarios } from "@prisma/client";
import { IItinerario } from "../models/Itinerario";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK, RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaItinerario, toPrismaItinerario } from "../mappers/itinerarioMapper";

const prisma = new PrismaClient();

export const insertarItinerario = async (itinerario: IItinerario) => {
    await prisma.itinerarios.create({
        data: toPrismaItinerario(itinerario)
    });
    return RESPONSE_INSERT_OK;
}

export const listarItinerarios = async () => {
    const itinerarios: itinerarios[] = await prisma.itinerarios.findMany({
        include: {
            viajes: {
                include: {
                    destinos: {
                        include: {
                            paises: true
                        }
                    },
                    hospedajes: true,
                    categorias: true,
                    paquetes: true
                }
            }
        },
        where: {
            estado_auditoria: '1'
        }
    });
    console.log('itinerarioService::listarItinerarios', itinerarios);
    return itinerarios.map((itinerario: any) => fromPrismaItinerario(itinerario,itinerario.viajes, itinerario.viajes.destinos,itinerario.viajes.hospedajes,itinerario.viajes.categorias,itinerario.viajes.paquetes,itinerario.viajes.destinos.paises
    ));
}

export const obtenerItinerario = async (idItinerario: number) => {
    console.log('itinerarioService::obtenerItinerario', idItinerario);

    const itinerario: any = await prisma.itinerarios.findUnique({
        where: {
            id_itenerario: idItinerario
        },
        include: {
            viajes: {
                include: {
                    destinos: {
                        include: {
                            paises: true
                        }
                    },
                    hospedajes: true,
                    categorias: true,
                    paquetes: true
                }
            }
        }
    });
    return fromPrismaItinerario(
        itinerario,itinerario.viajes,itinerario.viajes.destinos,itinerario.viajes.hospedajes,itinerario.viajes.categorias,itinerario.viajes.paquetes, itinerario.viajes.destinos.paises
    );
}

export const modificarItinerario = async (idItinerario: number, itinerario: IItinerario) => {
    console.log('itinerarioService::modificarItinerario', idItinerario);

    await prisma.itinerarios.update({
        data: toPrismaItinerario(itinerario),
        where: {
            id_itenerario: idItinerario
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarItinerario = async (idItinerario: number) => {
    console.log('itinerarioService::eliminarItinerario', idItinerario);

    await prisma.itinerarios.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_itenerario: idItinerario
        }
    });
    return RESPONSE_DELETE_OK;
}
