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
exports.eliminarPaquete = exports.modificarPaquete = exports.obtenerPaquete = exports.listarPaquetes = exports.insertarPaquete = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const paqueteMapper_1 = require("../mappers/paqueteMapper");
const prisma = new client_1.PrismaClient();
const insertarPaquete = (paquete) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.paquetes.create({
        data: (0, paqueteMapper_1.toPrismaPaquete)(paquete)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarPaquete = insertarPaquete;
const listarPaquetes = () => __awaiter(void 0, void 0, void 0, function* () {
    const paquetes = yield prisma.paquetes.findMany({
        include: {
            categorias: true,
            hospedajes: {
                include: {
                    destinos: {
                        include: {
                            paises: true
                        }
                    }
                }
            }
        },
        where: {
            estado_auditoria: '1'
        }
    });
    console.log('paqueteService::paquetes', paquetes);
    return paquetes.map((paquete) => (0, paqueteMapper_1.fromPrismaPaquete)(paquete, paquete.categorias, paquete.hospedajes, paquete.hospedajes.destinos, paquete.hospedajes.destinos.paises));
});
exports.listarPaquetes = listarPaquetes;
const obtenerPaquete = (idPaquete) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paqueteService::obtenerPaquete', idPaquete);
    const paquete = yield prisma.paquetes.findUnique({
        where: {
            id_paquete: idPaquete
        },
        include: {
            categorias: true,
            hospedajes: {
                include: {
                    destinos: {
                        include: {
                            paises: true
                        }
                    }
                }
            }
        }
    });
    return (0, paqueteMapper_1.fromPrismaPaquete)(paquete, paquete.categorias, paquete.hospedajes, paquete.hospedajes.destinos, paquete.hospedajes.destinos.paises);
});
exports.obtenerPaquete = obtenerPaquete;
const modificarPaquete = (idPaquete, paquete) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paqueteService::modificarPaquete', idPaquete, paquete);
    yield prisma.paquetes.update({
        data: (0, paqueteMapper_1.toPrismaPaquete)(paquete),
        where: {
            id_paquete: idPaquete
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarPaquete = modificarPaquete;
const eliminarPaquete = (idPaquete) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paqueteService::eliminarPaquete', idPaquete);
    yield prisma.paquetes.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_paquete: idPaquete
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarPaquete = eliminarPaquete;
//# sourceMappingURL=paqueteService.js.map