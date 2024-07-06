"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarHospedajeSchema = exports.insertarHospedajeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const hospedajeBaseSchema = {
    nombres: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$'))
        .max(100),
    precio: joi_1.default.number()
        .precision(2) // Limita el número de decimales a 2
        .strict()
};
exports.insertarHospedajeSchema = joi_1.default.object(Object.assign(Object.assign({}, hospedajeBaseSchema), { nombres: hospedajeBaseSchema.nombres.required(), precio: hospedajeBaseSchema.precio.required() }));
exports.modificarHospedajeSchema = joi_1.default.object(Object.assign({}, hospedajeBaseSchema));
//# sourceMappingURL=hospedajeSchema.js.map