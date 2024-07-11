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
exports.eliminarReserva = exports.modificarReserva = exports.obtenerResrva = exports.listarReservas = exports.insertarReserva = void 0;
const reservaService = __importStar(require("../services/reservaService"));
const ResponseModel_1 = require("../models/ResponseModel");
const reservaSchema_1 = require("../schemas/reservaSchema");
const insertarReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('reservaController::insertarReserva');
    try {
        const { error } = reservaSchema_1.insertarReservaSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield reservaService.insertarResrva(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarReserva = insertarReserva;
const listarReservas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('reservaConotroller::listarReserva');
    try {
        const reserva = yield reservaService.listarResrvas();
        res.status(200).json(ResponseModel_1.ResponseModel.success(reserva));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarReservas = listarReservas;
const obtenerResrva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('resrvaController::obtenerReserva');
    try {
        const { id } = req.params;
        const reserva = yield reservaService.obtenerReserva(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(reserva));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerResrva = obtenerResrva;
const modificarReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('reservaController::modificarReserva');
    try {
        const { id } = req.params;
        const { error } = reservaSchema_1.modificarReservaSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield reservaService.modificarReserva(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarReserva = modificarReserva;
const eliminarReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('reservaControlller::eliiinarReserva');
    try {
        const { id } = req.params;
        const response = yield reservaService.eliminarReserva(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarReserva = eliminarReserva;
//# sourceMappingURL=reservaController.js.map