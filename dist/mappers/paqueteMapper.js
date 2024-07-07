"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaPaquete = exports.fromPrismaPaquete = void 0;
const categoriaMapper_1 = require("./categoriaMapper");
const hospedajeMapper_1 = require("./hospedajeMapper");
const fromPrismaPaquete = (paquete, categoria, hospedaje, destino, pais) => ({
    idPaquete: paquete.id_paquete,
    categoria: (0, categoriaMapper_1.fromPrismaCategoria)(categoria),
    hospedaje: (0, hospedajeMapper_1.fromPrismaHospedaje)(hospedaje, destino, pais),
    nombre: paquete.nombre,
    transporte: paquete.transporte,
    precio: paquete.precio,
});
exports.fromPrismaPaquete = fromPrismaPaquete;
const toPrismaPaquete = (paquete) => ({
    id_paquete: paquete.idPaquete,
    id_categoria: paquete.categoria.idCategoria,
    id_hospedaje: paquete.hospedaje.idHospedaje,
    nombre: paquete.nombre,
    transporte: paquete.transporte,
    precio: paquete.precio,
});
exports.toPrismaPaquete = toPrismaPaquete;
//# sourceMappingURL=paqueteMapper.js.map