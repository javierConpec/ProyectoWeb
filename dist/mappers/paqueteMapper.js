"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaPaquete = exports.fromPrismaPaquete = void 0;
const fromPrismaPaquete = (paquete) => ({
    idCategoria: paquete.id_paquete,
    nombre: paquete.nombre,
    descripcion: paquete.descripcion,
});
exports.fromPrismaPaquete = fromPrismaPaquete;
const toPrismaPaquete = (paquete) => ({
    nombre: paquete.nombre,
    descripcion: paquete.descripcion,
});
exports.toPrismaPaquete = toPrismaPaquete;
//# sourceMappingURL=paqueteMapper.js.map