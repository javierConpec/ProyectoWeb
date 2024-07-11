"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarReserva = exports.modificarReserva = exports.obtenerReserva = exports.listarResrvas = exports.insertarResrva = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const reservaMapper_1 = require("../mappers/reservaMapper");
const prisma = new client_1.PrismaClient();
const insertarResrva = (reserva) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.reservas.create({
        data: (0, reservaMapper_1.toPrismaReserva)(reserva)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarResrva = insertarResrva;
const listarResrvas = () => __awaiter(void 0, void 0, void 0, function* () {
    const reserva = yield prisma.reservas.findMany({
        include: {
            viajes: true,
            usuarios: true
        },
        where: {
            estado_auditoria: '1'
        }
    });
    console.log('reservaController::listarReservas', reserva);
    return reserva.map((reserva) => (0, reservaMapper_1.fromPrismaReserva)(reserva, reserva.viajes, reserva.viajes.destinos, reserva.viajes.hospedajes, reserva.viajes.categorias, reserva.viajes.paquete, reserva.viajes.paises, reserva.usuarios, reserva.usuarios.roles));
});
exports.listarResrvas = listarResrvas;
const obtenerReserva = (idReserva) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('reservaService::obtenerReserva', idReserva);
    const reserva = yield prisma.reservas.findUnique({
        where: {
            id_reserva: idReserva
        },
        include: {
            viajes: true,
            usuarios: true
        }
    });
    return (0, reservaMapper_1.fromPrismaReserva)(reserva, reserva.viajes, reserva.viajes.destinos, reserva.viajes.hospedajes, reserva.viajes.categorias, reserva.viajes.paquete, reserva.viajes.paises, reserva.usuarios, reserva.usuarios.roles);
});
exports.obtenerReserva = obtenerReserva;
const modificarReserva = (idReserva, reserva) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('reservaService::mdificarReserva', idReserva);
    yield prisma.reservas.update({
        data: (0, reservaMapper_1.toPrismaReserva)(reserva),
        where: {
            id_reserva: idReserva
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarReserva = modificarReserva;
const eliminarReserva = (idReserva) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('reservaService::eliminarReserva', idReserva);
    yield prisma.reservas.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_reserva: idReserva
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarReserva = eliminarReserva;
//# sourceMappingURL=reservaService.js.map