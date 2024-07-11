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
exports.eliminarItinerario = exports.modificarItinerario = exports.obtenerItinerario = exports.listarItinerarios = exports.insertarItinerario = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const itinerarioMapper_1 = require("../mappers/itinerarioMapper");
const prisma = new client_1.PrismaClient();
const insertarItinerario = (itinerario) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.itinerarios.create({
        data: (0, itinerarioMapper_1.toPrismaItinerario)(itinerario)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarItinerario = insertarItinerario;
const listarItinerarios = () => __awaiter(void 0, void 0, void 0, function* () {
    const itinerarios = yield prisma.itinerarios.findMany({
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
    return itinerarios.map((itinerario) => (0, itinerarioMapper_1.fromPrismaItinerario)(itinerario, itinerario.viajes, itinerario.viajes.destinos, itinerario.viajes.hospedajes, itinerario.viajes.categorias, itinerario.viajes.paquetes, itinerario.viajes.destinos.paises));
});
exports.listarItinerarios = listarItinerarios;
const obtenerItinerario = (idItinerario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itinerarioService::obtenerItinerario', idItinerario);
    const itinerario = yield prisma.itinerarios.findUnique({
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
    return (0, itinerarioMapper_1.fromPrismaItinerario)(itinerario, itinerario.viajes, itinerario.viajes.destinos, itinerario.viajes.hospedajes, itinerario.viajes.categorias, itinerario.viajes.paquetes, itinerario.viajes.destinos.paises);
});
exports.obtenerItinerario = obtenerItinerario;
const modificarItinerario = (idItinerario, itinerario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itinerarioService::modificarItinerario', idItinerario);
    yield prisma.itinerarios.update({
        data: (0, itinerarioMapper_1.toPrismaItinerario)(itinerario),
        where: {
            id_itenerario: idItinerario
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarItinerario = modificarItinerario;
const eliminarItinerario = (idItinerario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itinerarioService::eliminarItinerario', idItinerario);
    yield prisma.itinerarios.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_itenerario: idItinerario
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarItinerario = eliminarItinerario;
//# sourceMappingURL=itinerarioService.js.map