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
exports.eliminarPaquete = exports.modificarPaquete = exports.obtenerPaquete = exports.listarPaquetes = exports.insertarPaquete = void 0;
const paqueteService = __importStar(require("../services/paqueteService"));
const ResponseModel_1 = require("../models/ResponseModel");
<<<<<<< HEAD
const insertarPaquete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paqueteController::insertarCategoria');
    try {
=======
const paqueteSchema_1 = require("../schemas/paqueteSchema");
const insertarPaquete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paqueteController::insertarPaquete');
    try {
        const { error } = paqueteSchema_1.insertarPaqueteSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
        const response = yield paqueteService.insertarPaquete(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarPaquete = insertarPaquete;
const listarPaquetes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paqueteController::listarPaquetes');
    try {
<<<<<<< HEAD
        const paquetes = yield paqueteService.listarPaquetes();
        res.status(200).json(ResponseModel_1.ResponseModel.success(paquetes));
=======
        const paquete = yield paqueteService.listarPaquetes();
        res.status(200).json(ResponseModel_1.ResponseModel.success(paquete));
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarPaquetes = listarPaquetes;
const obtenerPaquete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paqueteController::obtenerPaquete');
    try {
        const { id } = req.params;
        const paquete = yield paqueteService.obtenerPaquete(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(paquete));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerPaquete = obtenerPaquete;
const modificarPaquete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paqueteController::modificarPaquete');
    try {
        const { id } = req.params;
<<<<<<< HEAD
=======
        const { error } = paqueteSchema_1.modificarPaqueteSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
        const response = yield paqueteService.modificarPaquete(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarPaquete = modificarPaquete;
const eliminarPaquete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paqueteController::eliminarPaquete');
    try {
        const { id } = req.params;
        const response = yield paqueteService.eliminarPaquete(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarPaquete = eliminarPaquete;
//# sourceMappingURL=paqueteController.js.map