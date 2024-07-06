"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarHospedaje = exports.modifiicarHospedaje = exports.obtenerHospedaje = exports.listarHospedajes = exports.insertarHospedaje = void 0;
const hospedajeService = __importStar(require("../services/hospedajeService"));
const ResponseModel_1 = require("../models/ResponseModel");
const hospedajeSchema_1 = require("../schemas/hospedajeSchema");
const insertarHospedaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hospedajeContrller::insertarHospedaje');
    try {
        const { error } = hospedajeSchema_1.insertarHospedajeSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield hospedajeService.insertarHospedaje(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarHospedaje = insertarHospedaje;
const listarHospedajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hospedajeController::listarHospedajes');
    try {
        const hospedaje = yield hospedajeService.listarHospedajes();
        res.status(200).json(ResponseModel_1.ResponseModel.success(hospedaje));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarHospedajes = listarHospedajes;
const obtenerHospedaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hospedajeContoller::obtenerHospedaje');
    try {
        const { id } = req.params;
        const hospedaje = yield hospedajeService.obtenerHospedaje(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(hospedaje));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerHospedaje = obtenerHospedaje;
const modifiicarHospedaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hospedajeController::modiificarHospedaje');
    try {
        const { id } = req.params;
        const { error } = hospedajeSchema_1.modificarHospedajeSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield hospedajeService.modificarHospedaje(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modifiicarHospedaje = modifiicarHospedaje;
const eliminarHospedaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hospedajeContoller::eliminarHospedaje');
    try {
        const { id } = req.params;
        const response = yield hospedajeService.eliminarHospedajes(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarHospedaje = eliminarHospedaje;
//# sourceMappingURL=hospedajeContoller.js.map