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
exports.eliminarPais = exports.modificarPais = exports.ObtenerPais = exports.listarPaises = exports.insertarPais = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const paisMapper_1 = require("../mappers/paisMapper");
const prisma = new client_1.PrismaClient();
const insertarPais = (pais) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.paises.create({
        data: (0, paisMapper_1.toPrismaPais)(pais)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarPais = insertarPais;
const listarPaises = () => __awaiter(void 0, void 0, void 0, function* () {
    const paises = yield prisma.paises.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return paises.map((pais) => (0, paisMapper_1.fromPrismaPais)(pais));
});
exports.listarPaises = listarPaises;
const ObtenerPais = (idPais) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paisService::obtenerPais', idPais);
    const pais = yield prisma.paises.findUnique({
        where: {
            id_pais: idPais,
            estado_auditoria: '1'
        }
    });
    return (0, paisMapper_1.fromPrismaPais)(pais);
});
exports.ObtenerPais = ObtenerPais;
const modificarPais = (idPais, pais) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paisService::modificarPais', idPais, pais);
    yield prisma.paises.update({
        data: (0, paisMapper_1.toPrismaPais)(pais),
        where: {
            id_pais: idPais
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarPais = modificarPais;
const eliminarPais = (idPais) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paisService::eliminarPais', idPais);
    yield prisma.paises.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_pais: idPais
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarPais = eliminarPais;
//# sourceMappingURL=paisService.js.map