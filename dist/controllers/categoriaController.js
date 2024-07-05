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
exports.eliminarCategoria = exports.modificarCategoria = exports.obtenerCategoria = exports.listarCategorias = exports.insertarCategoria = void 0;
const categoriaService = __importStar(require("../services/categoriaService"));
const ResponseModel_1 = require("../models/ResponseModel");
const insertarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoriaController::insertarCategoria');
    try {
        const response = yield categoriaService.insertarCategoria(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarCategoria = insertarCategoria;
const listarCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoriaController::listarPaises');
    try {
        const categorias = yield categoriaService.listarCategorias();
        res.status(200).json(ResponseModel_1.ResponseModel.success(categorias));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarCategorias = listarCategorias;
const obtenerCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoriaController::obtenerPais');
    try {
        const { id } = req.params;
        const categoria = yield categoriaService.obtenerCategoria(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(categoria));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerCategoria = obtenerCategoria;
const modificarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoriaController::modificarPais');
    try {
        const { id } = req.params;
        const response = yield categoriaService.modificarCategoria(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarCategoria = modificarCategoria;
const eliminarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoriaController::eliminarPais');
    try {
        const { id } = req.params;
        const response = yield categoriaService.eliminarCategoria(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarCategoria = eliminarCategoria;
//# sourceMappingURL=categoriaController.js.map