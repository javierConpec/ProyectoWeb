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
exports.eliminarViaje = exports.modificarViaje = exports.obtenerViaje = exports.listarViaje = exports.insertarViaje = void 0;
const viajeService = __importStar(require("../services/viajeService"));
const ResponseModel_1 = require("../models/ResponseModel");
const viajeSchema_1 = require("../schemas/viajeSchema");
const insertarViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('viajeController::insertarViaje');
    try {
        const { error } = viajeSchema_1.insertarViajeShema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield viajeService.insertarViaje(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarViaje = insertarViaje;
const listarViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('vaijeController::listarViaje');
    try {
        const viajes = yield viajeService.listarViajes();
        res.status(200).json(ResponseModel_1.ResponseModel.success(viajes));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarViaje = listarViaje;
const obtenerViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('viajeController::obtenerViaje');
    try {
        const { id } = req.params;
        const viajes = yield viajeService.obtenerViaje(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(viajes));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerViaje = obtenerViaje;
const modificarViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('viajeController::modificarViaje');
    try {
        const { id } = req.params;
        const { error } = viajeSchema_1.modificarViajeSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield viajeService.modificarViaje(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarViaje = modificarViaje;
const eliminarViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('viajeController::eliminarViaje');
    try {
        const { id } = req.params;
        const response = yield viajeService.eliminarViaje(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarViaje = eliminarViaje;
//# sourceMappingURL=viajeContoller.js.map