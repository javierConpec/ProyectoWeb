import { PrismaClient, itinerarios_ } from "@prisma/client";
import { IItinerario } from "../models/Itinerario";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK, RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaItinerario, toPrismaItinerario } from "../mappers/itinerarioMapper";

const prisma = new PrismaClient();

export const insertarItinerario = async (itinerario: IItinerario) => {
    await prisma.itinerarios_.create({
        data: toPrismaItinerario(itinerario)
    });
    return RESPONSE_INSERT_OK;
}

export const listarItinerarios = async () => {
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
    return itinerarios.map((itinerario: any) => fromPrismaItinerario(
        itinerario,
        itinerario.viajes,
        itinerario.viajes.destinos,
        itinerario.viajes.destinos.paises,
        itinerario.viajes.paquetes,
        itinerario.viajes.paquetes.hospedajes,
        itinerario.viajes.paquetes.categorias,
        
        
    ));
}

export const obtenerItinerario = async (idItinerario: number) => {
    console.log('itinerarioService::obtenerItinerario', idItinerario);

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
    return fromPrismaItinerario(
        itinerario,
        itinerario.viajes,
        itinerario.viajes.destinos,
        itinerario.viajes.destinos.paises,
        itinerario.viajes.paquetes,
        itinerario.viajes.paquetes.hospedajes,
        itinerario.viajes.paquetes.categorias,
    );
}

export const modificarItinerario = async (idItinerario: number, itinerario: IItinerario) => {
    console.log('itinerarioService::modificarItinerario', idItinerario);

    await prisma.itinerarios_.update({
        data: toPrismaItinerario(itinerario),
        where: {
            id_itinerario: idItinerario
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarItinerario = async (idItinerario: number) => {
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
}