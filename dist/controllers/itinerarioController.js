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
exports.eliminarItinerario = exports.modificarItinerario = exports.obtnerItinerario = exports.listarItinerarios = exports.insertarItinerario = void 0;
const itinerarioService = __importStar(require("../services/itinerarioService"));
const ResponseModel_1 = require("../models/ResponseModel");
const itinerarioSchema_1 = require("../schemas/itinerarioSchema");
const insertarItinerario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itinerarioController::insertarItinerario');
    try {
        const { error } = itinerarioSchema_1.insertarItinerarioSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield itinerarioService.insertarItinerario(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarItinerario = insertarItinerario;
const listarItinerarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itnerarioController::listarItinerarios');
    try {
        const itinerario = yield itinerarioService.listarItinerarios();
        res.status(200).json(ResponseModel_1.ResponseModel.success(itinerario));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarItinerarios = listarItinerarios;
const obtnerItinerario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itinerarioController::obtenerItinerario');
    try {
        const { id } = req.params;
        const itinerario = yield itinerarioService.obtenerItinerario(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(itinerario));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtnerItinerario = obtnerItinerario;
const modificarItinerario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itinerarioController::modificarItinerario');
    try {
        const { id } = req.params;
        const { error } = itinerarioSchema_1.modificarItinerarioSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield itinerarioService.modificarItinerario(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarItinerario = modificarItinerario;
const eliminarItinerario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('itinerarioController::eliminarItinerario');
    try {
        const { id } = req.params;
        const response = yield itinerarioService.eliminarItinerario(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarItinerario = eliminarItinerario;
//# sourceMappingURL=itinerarioController.js.map