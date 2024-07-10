import { PrismaClient, itinerarios_, viajes, hospedajes, paises, paquetes, destinos, categorias } from "@prisma/client";
import { IItinerario } from "../models/Itinerario";
import { fromPrismaItinerario, toPrismaItinerario } from "../mappers/itinerarioMapper";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK, RESPONSE_DELETE_OK } from "../shared/constants";

const prisma = new PrismaClient();

export const insertarItinerario = async (itinerario: IItinerario) => {
    await prisma.itinerarios_.create({
        data: toPrismaItinerario(itinerario)
    });
    return RESPONSE_INSERT_OK;
}

export const listarItinerarios = async () => {
    try {
        const itinerarios: itinerarios_[] = await prisma.itinerarios_.findMany({
            include: {
                viajes: {
                    include: {
                        destinos: {
                            include: {
                                paises: true
                            }
                        },
                        paquetes: {
                            include: {
                                hospedajes: true,
                                categorias: true
                            }
                        }
                    }
                }
            },
            where: {
                estado_auditoria: '1'
            }
        });

        console.log('itinerarioService::listarItinerarios', itinerarios);

        return itinerarios.map((itinerario: any) => {
            return fromPrismaItinerario(
                itinerario,
                itinerario.viajes,
                itinerario.viajes.destinos,
                itinerario.viajes.hospedajes,
                itinerario.viajes.categorias,
                itinerario.viajes.paquetes ,
                itinerario.viajes.destinos.paises
            );
        });
        
    } catch (error) {
        console.error('Error al listar itinerarios:', error);
        throw error;
    }
}

export const obtenerItinerario = async (idItinerario: number) => {
    try {
        const itinerario: any = await prisma.itinerarios_.findUnique({
            where: {
                id_itinerario: idItinerario
            },
            include: {
                viajes: {
                    include: {
                        destinos: {
                            include: {
                                paises: true
                            }
                        },
                        paquetes: {
                            include: {
                                hospedajes: true,
                                categorias: true
                            }
                        }
                    }
                }
            }
        });

        console.log('itinerarioService::obtenerItinerario', itinerario);
        
        return fromPrismaItinerario(
            itinerario,
            itinerario.viajes,
            itinerario.viajes.destinos,
            itinerario.viajes.hospedajes,
            itinerario.viajes.categorias,
            itinerario.viajes.paquetes || null,
            itinerario.viajes.destinos.paises
        );
    } catch (error) {
        console.error('Error al obtener itinerario:', error);
        throw error;
    }
}

export const modificarItinerario = async (idItinerario: number, itinerario: IItinerario) => {
    try {
        console.log('itinerarioService::modificarItinerario', idItinerario);

        await prisma.itinerarios_.update({
            data: toPrismaItinerario(itinerario),
            where: {
                id_itinerario: idItinerario
            }
        });
        return RESPONSE_UPDATE_OK;
    } catch (error) {
        console.error('Error al modificar itinerario:', error);
        throw error;
    }
}

export const eliminarItinerario = async (idItinerario: number) => {
    try {
        console.log('itinerarioService::eliminarItinerario', idItinerario);

        await prisma.itinerarios_.update({
            data: {
                estado_auditoria: '0'
            },
            where: {
                id_itinerario: idItinerario
            }
        });
        return RESPONSE_DELETE_OK;
    } catch (error) {
        console.error('Error al eliminar itinerario:', error);
        throw error;
    }
}
