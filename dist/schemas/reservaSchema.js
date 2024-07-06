"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarReservaSchema = exports.insertarReservaSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const reservaBaseSchema = {
    numeroPersonas: joi_1.default.number()
        .strict(),
    metodoPago: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$')) // Patrón que permite solo letras sin espacios
        .max(100),
    pagoTotal: joi_1.default.number()
        .strict(),
};
exports.insertarReservaSchema = joi_1.default.object(Object.assign(Object.assign({}, reservaBaseSchema), { numeroPersonas: reservaBaseSchema.numeroPersonas.required(), metodoPago: reservaBaseSchema.metodoPago.required(), pagoTotal: reservaBaseSchema.pagoTotal.required() }));
exports.modificarReservaSchema = joi_1.default.object(Object.assign({}, reservaBaseSchema));
//# sourceMappingURL=reservaSchema.js.map