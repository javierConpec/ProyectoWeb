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
exports.eliminarDestino = exports.modificarDestino = exports.obtenerDestino = exports.listarDestinos = exports.insertarDestino = void 0;
const destinoService = __importStar(require("../services/destinoService"));
const ResponseModel_1 = require("../models/ResponseModel");
const destinoSchema_1 = require("../schemas/destinoSchema");
const insertarDestino = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('destinoController::insertarDestino');
    try {
        const { error } = destinoSchema_1.insertarDestinoSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield destinoService.insertarDestino(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarDestino = insertarDestino;
const listarDestinos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('destinoController::listarDestinos');
    try {
        const destinos = yield destinoService.listarDestinos();
        res.status(200).json(ResponseModel_1.ResponseModel.success(destinos));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarDestinos = listarDestinos;
const obtenerDestino = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('destinoController::obtenerDestino');
    try {
        const { id } = req.params;
        const destino = yield destinoService.obtenerDestino(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(destino));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerDestino = obtenerDestino;
const modificarDestino = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('destinoController::modificarDestino');
    try {
        const { id } = req.params;
        const { error } = destinoSchema_1.modificarDestinoSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield destinoService.modificarDestino(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarDestino = modificarDestino;
const eliminarDestino = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('destinoController::eliminarDestino');
    try {
        const { id } = req.params;
        const response = yield destinoService.eliminarDestino(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarDestino = eliminarDestino;
//# sourceMappingURL=destinoController.js.map