"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaPais = exports.fromPrismaPais = void 0;
const fromPrismaPais = (pais) => ({
    idPais: pais.id_pais,
    nombre: pais.nombre,
});
exports.fromPrismaPais = fromPrismaPais;
const toPrismaPais = (pais) => ({
    nombre: pais.nombre
});
exports.toPrismaPais = toPrismaPais;
//# sourceMappingURL=paisMapper.js.map