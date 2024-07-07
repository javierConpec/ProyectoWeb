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
exports.eliminarHospedaje = exports.modificarHospedaje = exports.obtenerHospedaje = exports.listarHospedajes = exports.insertarHospedaje = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const hospedajeMapper_1 = require("../mappers/hospedajeMapper");
const prisma = new client_1.PrismaClient();
const insertarHospedaje = (hospedaje) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.hospedajes.create({
        data: (0, hospedajeMapper_1.toPrismaHospedaje)(hospedaje)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarHospedaje = insertarHospedaje;
const listarHospedajes = () => __awaiter(void 0, void 0, void 0, function* () {
    const hospedajes = yield prisma.hospedajes.findMany({
        include: {
            destinos: {
                include: {
                    paises: true
                }
            }
        },
        where: {
            estado_auditoria: '1'
        }
    });
    console.log('hospedajeService::hospedajes', hospedajes);
    return hospedajes.map((hospedaje) => (0, hospedajeMapper_1.fromPrismaHospedaje)(hospedaje, hospedaje.destinos, hospedaje.destinos.paises));
});
exports.listarHospedajes = listarHospedajes;
const obtenerHospedaje = (idHospedaje) => __awaiter(void 0, void 0, void 0, function* () {
    const hospedaje = yield prisma.hospedajes.findUnique({
        where: {
            id_hospedaje: idHospedaje,
            estado_auditoria: '1'
        },
        include: {
            destinos: {
                include: {
                    paises: true
                }
            }
        }
    });
    return (0, hospedajeMapper_1.fromPrismaHospedaje)(hospedaje, hospedaje.destinos, hospedaje.destinos.paises);
});
exports.obtenerHospedaje = obtenerHospedaje;
const modificarHospedaje = (idHospedaje, hospedaje) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.hospedajes.update({
        data: (0, hospedajeMapper_1.toPrismaHospedaje)(hospedaje),
        where: {
            id_hospedaje: idHospedaje
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarHospedaje = modificarHospedaje;
const eliminarHospedaje = (idHospedaje) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hospedajeService::eliminarHospedaje', idHospedaje);
    yield prisma.hospedajes.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_hospedaje: idHospedaje
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarHospedaje = eliminarHospedaje;
//# sourceMappingURL=hospedajeService.js.map