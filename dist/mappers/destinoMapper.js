"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaDestino = exports.fromPrismaDestino = void 0;
const paisMapper_1 = require("./paisMapper");
const fromPrismaDestino = (destino, pais) => ({
    idDestino: destino.id_destino,
    pais: (0, paisMapper_1.fromPrismaPais)(pais),
    nombre: destino.nombre
});
exports.fromPrismaDestino = fromPrismaDestino;
const toPrismaDestino = (destino) => ({
    id_destino: destino.idDestino,
    id_rol: destino.pais.idPais,
    nombre: destino.nombre
});
exports.toPrismaDestino = toPrismaDestino;
//# sourceMappingURL=destinoMapper.js.map