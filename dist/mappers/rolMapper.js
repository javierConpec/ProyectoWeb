"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaRol = exports.fromPrismaRol = void 0;
const fromPrismaRol = (roles) => ({
    idRol: roles.id_rol,
    nombre: roles.nombre,
});
exports.fromPrismaRol = fromPrismaRol;
const toPrismaRol = (roles) => ({
    nombre: roles.nombre
});
exports.toPrismaRol = toPrismaRol;
//# sourceMappingURL=rolMapper.js.map