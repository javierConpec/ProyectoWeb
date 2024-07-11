import { PrismaClient, reservas } from "@prisma/client";
import { IReserva } from "../models/Reserva";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK, RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaReserva, toPrismaReserva } from "../mappers/reservaMapper";

const prisma = new PrismaClient();

export const insertarResrva = async (reserva: IReserva) => {
    await prisma.reservas.create({
        data: toPrismaReserva(reserva)
    });
    return RESPONSE_INSERT_OK;
}

export const listarResrvas = async () => {
    const reserva: reservas[] = await prisma.reservas.findMany({
        include: {
            viajes: true,
            usuarios:true
        },
        where: {
            estado_auditoria: '1'
        }
    });
    console.log('reservaController::listarReservas', reserva);
    return reserva.map((reserva: any) => fromPrismaReserva(reserva,reserva.viajes, reserva.viajes.destinos, reserva.viajes.hospedajes, reserva.viajes.categorias, reserva.viajes.paquete, reserva.viajes.paises,reserva.usuarios, reserva.usuarios.roles));
}

export const obtenerReserva = async (idReserva: number) => {
    console.log('reservaService::obtenerReserva', idReserva);

    const reserva: any = await prisma.reservas.findUnique({
        where: {
            id_reserva: idReserva
        },
        include: {
            viajes: true,
            usuarios:true
            
        }
    });
    return fromPrismaReserva(reserva,reserva.viajes, reserva.viajes.destinos, reserva.viajes.hospedajes, reserva.viajes.categorias, reserva.viajes.paquete, reserva.viajes.paises,reserva.usuarios, reserva.usuarios.roles);
}

export const modificarReserva = async (idReserva: number, reserva: IReserva) => {
    console.log('reservaService::mdificarReserva', idReserva);

    await prisma.reservas.update({
        data: toPrismaReserva(reserva),
        where: {
            id_reserva: idReserva
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarReserva = async (idReserva: number) => {
    console.log('reservaService::eliminarReserva', idReserva);

    await prisma.reservas.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_reserva: idReserva
        }
    });
    return RESPONSE_DELETE_OK;
}
