"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaPaquete = exports.fromPrismaPaquete = void 0;
const fromPrismaPaquete = (paquete) => ({
    idPaquete: paquete.id_paquete,
    nombre: paquete.nombre,
    descripcion: paquete.descripcion,
    descuento: paquete.descuento,
});
exports.fromPrismaPaquete = fromPrismaPaquete;
const toPrismaPaquete = (paquete) => ({
    nombre: paquete.nombre,
    descripcion: paquete.descripcion,
    descuento: paquete.descuento,
});
exports.toPrismaPaquete = toPrismaPaquete;
//# sourceMappingURL=paqueteMapper.js.map