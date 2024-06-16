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
exports.eliminarRol = exports.modificarRol = exports.obtenerRol = exports.listarRoles = exports.insertarRol = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const rolMapper_1 = require("../mappers/rolMapper");
const prisma = new client_1.PrismaClient();
const insertarRol = (rol) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.roles.create({
        data: (0, rolMapper_1.toPrismaRol)(rol)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarRol = insertarRol;
const listarRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    const rol = yield prisma.roles.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return rol.map((rol) => (0, rolMapper_1.fromPrismaRol)(rol));
});
exports.listarRoles = listarRoles;
const obtenerRol = (idRol) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('rolService::obtenerRol', idRol);
    const rol = yield prisma.roles.findUnique({
        where: {
            id_rol: idRol,
            estado_auditoria: '1'
        }
    });
    return (0, rolMapper_1.fromPrismaRol)(rol);
});
exports.obtenerRol = obtenerRol;
const modificarRol = (idRol, rol) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('rolService::modificarRol', idRol, rol);
    yield prisma.roles.update({
        data: (0, rolMapper_1.toPrismaRol)(rol),
        where: {
            id_rol: idRol
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarRol = modificarRol;
const eliminarRol = (idRol) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('rolService::eliminarRol', idRol);
    yield prisma.roles.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_rol: idRol
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarRol = eliminarRol;
//# sourceMappingURL=rolService.js.map