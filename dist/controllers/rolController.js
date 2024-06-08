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
exports.eliminarRol = exports.modificarRol = exports.obtenerRol = exports.listarRoles = exports.insertarRol = void 0;
const rolService = __importStar(require("../services/rolService"));
const ResponseModel_1 = require("../models/ResponseModel");
const insertarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('rolController::insertarrol');
    try {
        const response = yield rolService.insertarRol(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarRol = insertarRol;
const listarRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('rolController::listarRoles');
    try {
        const roles = yield rolService.listarRoles();
        res.status(200).json(ResponseModel_1.ResponseModel.success(roles));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarRoles = listarRoles;
const obtenerRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('rolController::obtenerRol');
    try {
        const { id } = req.params;
        const rol = yield rolService.obtenerRol(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(rol));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerRol = obtenerRol;
const modificarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('rolController::modificarRol');
    try {
        const { id } = req.params;
        const response = yield rolService.modificarRol(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarRol = modificarRol;
const eliminarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('rolController::eliminarRol');
    try {
        const { id } = req.params;
        const response = yield rolService.eliminarRol(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarRol = eliminarRol;
//# sourceMappingURL=rolController.js.map