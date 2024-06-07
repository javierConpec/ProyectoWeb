"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaRol = exports.fromPrismaRol = void 0;
const fromPrismaRol = (roles) => ({
    idRol: 1,
    nombre: roles.nombre,
    estado: roles.estado,
    fechaCreacion: roles.fecha_creacion,
    fechaModificacion: roles.fecha_modificacion
});
exports.fromPrismaRol = fromPrismaRol;
const toPrismaRol = (roles) => ({
    nombre: roles.nombre
});
exports.toPrismaRol = toPrismaRol;
//# sourceMappingURL=rolMapper.js.map