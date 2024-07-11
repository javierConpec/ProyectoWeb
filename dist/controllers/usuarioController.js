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
exports.eliminarUsuario = exports.modificarUsuario = exports.obtenerUsuario = exports.listarUsuarios = exports.insertarUsuario = void 0;
const usuarioService = __importStar(require("../services/usuarioService"));
const ResponseModel_1 = require("../models/ResponseModel");
const usuarioSchema_1 = require("../schemas/usuarioSchema");
const insertarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuarioController::insertarUsuario');
    try {
        const { error } = usuarioSchema_1.insertarUsuarioSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield usuarioService.insertarUsuario(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarUsuario = insertarUsuario;
const listarUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuarioController::listarUsuarios');
    try {
        const usuarios = yield usuarioService.listarUsuarios();
        res.status(200).json(ResponseModel_1.ResponseModel.success(usuarios));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarUsuarios = listarUsuarios;
const obtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuarioController::obtenerUsuario');
    try {
        const { id } = req.params;
        const usuario = yield usuarioService.obtenerUsuario(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(usuario));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerUsuario = obtenerUsuario;
const modificarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuarioController::modificarUsuario');
    try {
        const { id } = req.params;
        const { error } = usuarioSchema_1.modificarUsuarioSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield usuarioService.modificarUsuario(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarUsuario = modificarUsuario;
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuarioController::eliminarUsuario');
    try {
        const { id } = req.params;
        const response = yield usuarioService.eliminarUsuario(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarUsuario = eliminarUsuario;
//# sourceMappingURL=usuarioController.js.map