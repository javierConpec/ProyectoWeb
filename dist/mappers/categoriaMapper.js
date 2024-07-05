"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaCategoria = exports.fromPrismaCategoria = void 0;
const fromPrismaCategoria = (categoria) => ({
    idCategoria: categoria.id_categoria,
    nombre: categoria.nombre,
    descripcion: categoria.descripcion,
});
exports.fromPrismaCategoria = fromPrismaCategoria;
const toPrismaCategoria = (categoria) => ({
    nombre: categoria.nombre,
    descripcion: categoria.descripcion,
});
exports.toPrismaCategoria = toPrismaCategoria;
//# sourceMappingURL=categoriaMapper.js.map