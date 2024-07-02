"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaCategoria = exports.fromPrismaCategoria = void 0;
const fromPrismaCategoria = (categoria) => ({
    idCategoria: categoria.id_categoria,
    nombre: categoria.nombre
});
exports.fromPrismaCategoria = fromPrismaCategoria;
const toPrismaCategoria = (categoria) => ({
    nombre: categoria.nombre
});
exports.toPrismaCategoria = toPrismaCategoria;
//# sourceMappingURL=categoriaMapper.js.map