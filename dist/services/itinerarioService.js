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
    yield prisma.itinerarios_.create({
        data: (0, itinerarioMapper_1.toPrismaItinerario)(itinerario)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarItinerario = insertarItinerario;
const listarItinerarios = () => __awaiter(void 0, void 0, void 0, function* () {
    const itinerarios = yield prisma.itinerarios_.findMany({
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
    return itinerarios.map((itinerario) => {
        var _a, _b, _c, _d, _e;
        return (0, itinerarioMapper_1.fromPrismaItinerario)(itinerario, itinerario.viajes, itinerario.viajes.destinos, (_a = itinerario.viajes) === null || _a === void 0 ? void 0 : _a.hospedajes, (_b = itinerario.viajes) === null || _b === void 0 ? void 0 : _b.categorias, (_c = itinerario.viajes) === null || _c === void 0 ? void 0 : _c.paquetes, (_e = (_d = itinerario.viajes) === null || _d === void 0 ? void 0 : _d.destinos) === null || _e === void 0 ? void 0 : _e.paises);
    });
});
exports.listarItinerarios = listarItinerarios;
const obtenerItinerario = (idItinerario) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    console.log('itinerarioService::obtenerItinerario', idItinerario);
    const itinerario = yield prisma.itinerarios_.findUnique({
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
                    hospedajes: true,
                    categorias: true,
                    paquetes: true
                }
            }
        }
    });
    return (0, itinerarioMapper_1.fromPrismaItinerario)(itinerario, itinerario.viajes, (_a = itinerario.viajes) === null || _a === void 0 ? void 0 : _a.destinos, (_b = itinerario.viajes) === null || _b === void 0 ? void 0 : _b.hospedajes, (_c = itinerario.viajes) === null || _c === void 0 ? void 0 : _c.categorias, (_d = itinerario.viajes) === null || _d === void 0 ? void 0 : _d.paquetes, (_f = (_e = itinerario.viajes) === null || _e === void 0 ? void 0 : _e.destinos) === null || _f === void 0 ? void 0 : _f.paises);
});
exports.obtenerItinerario = obtenerItinerario;
const modificarItinerario = (idItinerario, itinerario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itinerarioService::modificarItinerario', idItinerario);
    yield prisma.itinerarios_.update({
        data: (0, itinerarioMapper_1.toPrismaItinerario)(itinerario),
        where: {
            id_itinerario: idItinerario
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarItinerario = modificarItinerario;
const eliminarItinerario = (idItinerario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itinerarioService::eliminarItinerario', idItinerario);
    yield prisma.itinerarios_.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_itinerario: idItinerario
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarItinerario = eliminarItinerario;
//# sourceMappingURL=itinerarioService.js.map