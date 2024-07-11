"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaReserva = exports.fromPrismaReserva = void 0;
const usuarioMapper_1 = require("./usuarioMapper");
const viajeMapper_1 = require("./viajeMapper");
const fromPrismaReserva = (reserva, usuario, rol, viaje, paquete, pais, categoria, destino, hospedaje) => ({
    idReserva: reserva.id_reserva,
    usuario: (0, usuarioMapper_1.fromPrismaUsuario)(usuario, rol),
    viaje: (0, viajeMapper_1.fromPrismaViaje)(viaje, paquete, categoria, hospedaje, destino, pais),
    numeroPersonas: reserva.numero_personas,
    metodoPago: reserva.metodo_pago,
    pagoTotal: reserva.pago_total
});
exports.fromPrismaReserva = fromPrismaReserva;
const toPrismaReserva = (reserva) => ({
    id_reserva: reserva.idReserva,
    id_usuario: reserva.ususario.idUsuario,
    viaje: reserva.viaje.idViaje,
    numero_personas: reserva.numeroPersonas,
    metodo_pago: reserva.metodoPago,
    pago_total: reserva.pagoTotal,
});
exports.toPrismaReserva = toPrismaReserva;
//# sourceMappingURL=reservaMapper.js.map