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
exports.eliminarCategoria = exports.modificarCategoria = exports.obtenerCategoria = exports.listarCategorias = exports.insertarCategoria = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const categoriaMapper_1 = require("../mappers/categoriaMapper");
const prisma = new client_1.PrismaClient();
const insertarCategoria = (categoria) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.categorias.create({
        data: (0, categoriaMapper_1.toPrismaCategoria)(categoria)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarCategoria = insertarCategoria;
const listarCategorias = () => __awaiter(void 0, void 0, void 0, function* () {
    const categorias = yield prisma.categorias.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return categorias.map((categoria) => (0, categoriaMapper_1.fromPrismaCategoria)(categoria));
});
exports.listarCategorias = listarCategorias;
const obtenerCategoria = (idCategoria) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoriaService::obtenerCategoria', idCategoria);
    const categoria = yield prisma.categorias.findUnique({
        where: {
            id_categoria: idCategoria,
            estado_auditoria: '1'
        }
    });
    return (0, categoriaMapper_1.fromPrismaCategoria)(categoria);
});
exports.obtenerCategoria = obtenerCategoria;
const modificarCategoria = (idCategoria, categoria) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoriaService::modificarCategoria', idCategoria, categoria);
    yield prisma.categorias.update({
        data: (0, categoriaMapper_1.toPrismaCategoria)(categoria),
        where: {
            id_categoria: idCategoria
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarCategoria = modificarCategoria;
const eliminarCategoria = (idCategoria) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoriaService::eliminarCategoria', idCategoria);
    yield prisma.categorias.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_categoria: idCategoria
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarCategoria = eliminarCategoria;
//# sourceMappingURL=categoriaService.js.map