"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarPaqueteSchema = exports.insertarPaqueteSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const paqueteBaseSchema = {
    nombre: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$')) // Patrón que permite solo letras sin espacios
        .max(100),
    transporte: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$')) // Patrón que permite solo letras sin espacios
        .max(100),
    precio: joi_1.default.number()
        .precision(2) // Limita el número de decimales a 2
        .strict()
};
exports.insertarPaqueteSchema = joi_1.default.object(Object.assign(Object.assign({}, paqueteBaseSchema), { nombre: paqueteBaseSchema.nombre.required(), transporte: paqueteBaseSchema.transporte.required(), precio: paqueteBaseSchema.precio.required() }));
exports.modificarPaqueteSchema = joi_1.default.object(Object.assign({}, paqueteBaseSchema));
//# sourceMappingURL=paqueteSchema.js.map