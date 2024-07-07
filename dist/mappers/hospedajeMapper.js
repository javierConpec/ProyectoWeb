"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaHospedaje = exports.fromPrismaHospedaje = void 0;
const destinoMapper_1 = require("./destinoMapper");
const fromPrismaHospedaje = (hospedaje, destino, pais) => ({
    idHospedaje: hospedaje.id_hospedaje,
    destino: (0, destinoMapper_1.fromPrismaDestino)(destino, pais),
    nombre: hospedaje.nombre,
    precio: hospedaje.precio
});
exports.fromPrismaHospedaje = fromPrismaHospedaje;
const toPrismaHospedaje = (hospedaje) => ({
    id_hospedaje: hospedaje.idHospedaje,
    destino: {
        connect: {
            id_destino: hospedaje.destino
        }
    },
    nombre: hospedaje.nombre,
    precio: hospedaje.precio
});
exports.toPrismaHospedaje = toPrismaHospedaje;
//# sourceMappingURL=hospedajeMapper.js.map