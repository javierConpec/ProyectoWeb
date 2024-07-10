import { categorias, destinos, hospedajes, paises, paquetes, reservas, roles, usuarios,viajes } from "@prisma/client";
import { IReserva } from "../models/Reserva";
import { fromPrismaUsuario } from "./usuarioMapper";
import { fromPrismaViaje } from "./viajeMapper";

export const fromPrismaReserva = (reserva: reservas, usuario: usuarios, rol:roles,viaje:viajes,paquete:paquetes,pais:paises,categoria:categorias,destino:destinos,hospedaje:hospedajes): any => ({
    idReserva: reserva.id_reserva,
    usuario: fromPrismaUsuario(usuario,rol),
    viaje:fromPrismaViaje(viaje,paquete,categoria,hospedaje,destino,pais),
    numeroPersonas: reserva.numero_personas,
    metodoPago:reserva.metodo_pago,
    pagoTotal:reserva.pago_total

});

export const toPrismaReserva = (reserva: IReserva): any => ({
    id_usuario: reserva.usuario.idUsuario,
    id_viaje: reserva.viaje.idViaje,
    numero_personas: reserva.numeroPersonas,
    metodo_pago: reserva.metodoPago,
    pago_total: reserva.pagoTotal,
});

