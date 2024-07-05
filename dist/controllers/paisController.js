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
exports.eliminarPais = exports.modificarPais = exports.obtenerPais = exports.listarPaises = exports.insertarPais = void 0;
const paisService = __importStar(require("../services/paisService"));
const ResponseModel_1 = require("../models/ResponseModel");
const insertarPais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paisController::insertarPais');
    try {
        const response = yield paisService.insertarPais(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarPais = insertarPais;
const listarPaises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paisContoller::listarPaises');
    try {
        const paises = yield paisService.listarPaises();
        res.status(200).json(ResponseModel_1.ResponseModel.success(paises));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarPaises = listarPaises;
const obtenerPais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paisController::obtenerPais');
    try {
        const { id } = req.params;
        const pais = yield paisService.ObtenerPais(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(pais));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerPais = obtenerPais;
const modificarPais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paiscontroller::modificarPais');
    try {
        const { id } = req.params;
        const response = yield paisService.modificarPais(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarPais = modificarPais;
const eliminarPais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('paisController::eliminarPais');
    try {
        const { id } = req.params;
        const response = yield paisService.eliminarPais(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarPais = eliminarPais;
//# sourceMappingURL=paisController.js.map