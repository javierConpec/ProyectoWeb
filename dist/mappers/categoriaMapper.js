"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaCategoria = exports.fromPrismaCategoria = void 0;
const fromPrismaCategoria = (categoria) => ({
    idCategoria: categoria.id_categoria,
    nombre: categoria.nombre,
<<<<<<< HEAD
    descripcion: categoria.descripcion,
=======
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
});
exports.fromPrismaCategoria = fromPrismaCategoria;
const toPrismaCategoria = (categoria) => ({
    nombre: categoria.nombre,
    descripcion: categoria.descripcion,
});
exports.toPrismaCategoria = toPrismaCategoria;
//# sourceMappingURL=categoriaMapper.js.map