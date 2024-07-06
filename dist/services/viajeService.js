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
exports.eliminarViaje = exports.modificarViaje = exports.obtenerViaje = exports.listarViajes = exports.insertarViaje = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const viajeMapper_1 = require("../mappers/viajeMapper");
const prisma = new client_1.PrismaClient();
const insertarViaje = (viaje) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.viajes.create({
        data: (0, viajeMapper_1.toPrismaViaje)(viaje)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarViaje = insertarViaje;
const listarViajes = () => __awaiter(void 0, void 0, void 0, function* () {
    const viajes = yield prisma.viajes.findMany({
        include: {
            destinos: {
                include: {
                    paises: true
                }
            },
            categorias: true,
            hospedajes: {
                include: {
                    destinos: {
                        include: {
                            paises: true
                        }
                    }
                }
            },
            paquetes: true
        },
        where: {
            estado_auditoria: '1'
        }
    });
    console.log('viajeService::viajes', viajes);
    return viajes.map((viaje) => {
        var _a, _b, _c;
        return (0, viajeMapper_1.fromPrismaViaje)(viaje, viaje.paquetes, viaje.categorias, viaje.hospedajes, (_a = viaje.hospedajes) === null || _a === void 0 ? void 0 : _a.destinos, (_c = (_b = viaje.hospedajes) === null || _b === void 0 ? void 0 : _b.destinos) === null || _c === void 0 ? void 0 : _c.paises);
    });
});
exports.listarViajes = listarViajes;
const obtenerViaje = (idViaje) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    console.log('viajeService::obtenerViaje', idViaje);
    const viaje = yield prisma.viajes.findUnique({
        where: {
            id_viaje: idViaje
        },
        include: {
            destinos: {
                include: {
                    paises: true
                }
            },
            hospedajes: {
                include: {
                    destinos: {
                        include: {
                            paises: true
                        }
                    }
                }
            },
            categorias: true,
            paquetes: true
        }
    });
    return (0, viajeMapper_1.fromPrismaViaje)(viaje, viaje.paquetes, viaje.categorias, viaje.hospedajes, (_a = viaje.hospedajes) === null || _a === void 0 ? void 0 : _a.destinos, (_c = (_b = viaje.hospedajes) === null || _b === void 0 ? void 0 : _b.destinos) === null || _c === void 0 ? void 0 : _c.paises);
});
exports.obtenerViaje = obtenerViaje;
const modificarViaje = (idViaje, viaje) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('viajeService::modificarViaje', idViaje, viaje);
    yield prisma.viajes.update({
        data: (0, viajeMapper_1.toPrismaViaje)(viaje),
        where: {
            id_viaje: idViaje
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarViaje = modificarViaje;
const eliminarViaje = (idViaje) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('viajeService::eliminarViaje', idViaje);
    yield prisma.viajes.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_viaje: idViaje
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarViaje = eliminarViaje;
//# sourceMappingURL=viajeService.js.map