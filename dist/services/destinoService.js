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
exports.eliminarDestino = exports.modificarDestino = exports.obtenerDestino = exports.listarDestinos = exports.insertarDestino = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const destinoMapper_1 = require("../mappers/destinoMapper");
const prisma = new client_1.PrismaClient();
const insertarDestino = (destino) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.destinos.create({
        data: (0, destinoMapper_1.toPrismaDestino)(destino)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarDestino = insertarDestino;
const listarDestinos = () => __awaiter(void 0, void 0, void 0, function* () {
    const destinos = yield prisma.destinos.findMany({
        include: {
            paises: true
        }
    });
    console.log('destinoService::destinos', destinos);
    return destinos.map((destino) => (0, destinoMapper_1.fromPrismaDestino)(destino, destino.paises));
});
exports.listarDestinos = listarDestinos;
const obtenerDestino = (idDestino) => __awaiter(void 0, void 0, void 0, function* () {
    const destino = yield prisma.destinos.findUnique({
        where: {
            id_destino: idDestino
        },
        include: {
            paises: true
        }
    });
    return (0, destinoMapper_1.fromPrismaDestino)(destino, destino.paises);
});
exports.obtenerDestino = obtenerDestino;
const modificarDestino = (idDestino, destino) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.destinos.update({
        data: (0, destinoMapper_1.toPrismaDestino)(destino),
        where: {
            id_destino: idDestino
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarDestino = modificarDestino;
const eliminarDestino = (idDestino) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.destinos.delete({
        where: {
            id_destino: idDestino
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarDestino = eliminarDestino;
//# sourceMappingURL=destinoService.js.map