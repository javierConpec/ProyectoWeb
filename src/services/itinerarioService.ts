import { PrismaClient, itinerarios_ } from "@prisma/client";
import { IItinerario } from "../models/Itinerario";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK, RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaItinerario, toPrismaItinerario } from "../mappers/itinerarioMapper";

const prisma = new PrismaClient();

export const insertarItinerario = async (Itinerario: IItinerario) => {
    await prisma.itinerarios_.create({
        data: toPrismaItinerario(Itinerario)
    });
    return RESPONSE_INSERT_OK;
}

export const listarItinerarios = async () => {
    const Itinerario: itinerarios_[] = await prisma.itinerarios_.findMany({
        include: {
            viajes: true,
        },
        where: {
            estado_auditoria: '1'
        }
    });
    console.log('itinerarioService::listarItinerarios', Itinerario);
    return Itinerario.map((Itinerario: any) => fromPrismaItinerario(Itinerario,Itinerario.viajes, Itinerario.viajes.destinos, Itinerario.viajes.hospedajes, Itinerario.viajes.categorias, Itinerario.viajes.paquete, Itinerario.viajes.paises));
}

export const obtenerItnerario = async (idItinerario: number) => {
    console.log('itinerarioService::obtenerItinerario', idItinerario);

    const itinerario: any = await prisma.itinerarios_.findUnique({
        where: {
            id_itinerario: idItinerario
        },
        include: {
            viajes: true,
            
        }
    });
    return fromPrismaItinerario(itinerario,itinerario.viajes, itinerario.viajes.destinos, itinerario.viajes.hospedajes, itinerario.viajes.categorias, itinerario.viajes.paquete, itinerario.viajes.paises);
}

export const modificarItiinerario = async (idItinerario: number, itinerario: IItinerario) => {
    console.log('itinerarioService::modificarItinerario', idItinerario);

    await prisma.itinerarios_.update({
        data: toPrismaItinerario(itinerario),
        where: {
            id_itinerario: idItinerario
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const elimnarItinerario = async (idItinerario: number) => {
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
