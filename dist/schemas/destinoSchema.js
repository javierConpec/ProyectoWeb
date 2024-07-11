"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarDestinoSchema = exports.insertarDestinoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const destinoBaseSchema = {
    nombre: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z\\s]+$')) // Permite solo letras y espacios
        .max(100),
    pais: joi_1.default.number()
        .integer()
        .positive() // Agrega la validación para el campo pais
};
exports.insertarDestinoSchema = joi_1.default.object(Object.assign(Object.assign({}, destinoBaseSchema), { nombre: destinoBaseSchema.nombre.required(), pais: destinoBaseSchema.pais.required() }));
exports.modificarDestinoSchema = joi_1.default.object(Object.assign({}, destinoBaseSchema));
//# sourceMappingURL=destinoSchema.js.map