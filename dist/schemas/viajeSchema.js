"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarViajeSchema = exports.insertarViajeShema = void 0;
const joi_1 = __importDefault(require("joi"));
const viajeBaseSchema = {
    fechaInicio: joi_1.default.date()
        .iso(),
    fechaFin: joi_1.default.date()
        .iso(),
    tarifa: joi_1.default.number()
        .precision(2) // Limita el número de decimales a 2
        .strict()
};
exports.insertarViajeShema = joi_1.default.object(Object.assign(Object.assign({}, viajeBaseSchema), { fechaInicio: viajeBaseSchema.fechaInicio.required(), fechaFin: viajeBaseSchema.fechaFin.required(), tarifa: viajeBaseSchema.tarifa.required() }));
exports.modificarViajeSchema = joi_1.default.object(Object.assign({}, viajeBaseSchema));
//# sourceMappingURL=viajeSchema.js.map