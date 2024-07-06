"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaViaje = exports.fromPrismaViaje = void 0;
const categoriaMapper_1 = require("./categoriaMapper");
const hospedajeMapper_1 = require("./hospedajeMapper");
const destinoMapper_1 = require("./destinoMapper");
const paqueteMapper_1 = require("./paqueteMapper");
const fromPrismaViaje = (viaje, paquete, categoria, hospedaje, destino, pais) => ({
    idViaje: viaje.id_viaje,
    destino: (0, destinoMapper_1.fromPrismaDestino)(destino, pais),
    categoria: (0, categoriaMapper_1.fromPrismaCategoria)(categoria),
    hospedaje: (0, hospedajeMapper_1.fromPrismaHospedaje)(hospedaje, destino, pais),
    paquete: (0, paqueteMapper_1.fromPrismaPaquete)(paquete, categoria, hospedaje, destino, pais),
    fechaInicio: viaje.fecha_inicio,
    fechaFin: viaje.fecha_fin,
    tarifa: viaje.tarifa,
});
exports.fromPrismaViaje = fromPrismaViaje;
const toPrismaViaje = (viaje) => ({
    id_viaje: viaje.idViaje,
    id_destino: viaje.destino.idDestino,
    id_categoria: viaje.categoria.idCategoria,
    id_hospedaje: viaje.hospedaje.idHospedaje,
    id_paquete: viaje.paquete.idPaquete,
    fecha_inicio: viaje.fechaInicio,
    fecha_fin: viaje.fechaFin,
    tarifa: viaje.tarifa,
});
exports.toPrismaViaje = toPrismaViaje;
//# sourceMappingURL=viajeMapper.js.map