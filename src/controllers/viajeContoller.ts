import { Request,Response } from "express";
import * as viajeService from "../services/viajeService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarViajeShema,modificarViajeSchema } from "../schemas/viajeSchema";

export const insertarViaje = async (req: Request, res: Response) => {
    console.log('viajeController::insertarViaje');
    try {
        const { error } = insertarViajeShema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await viajeService.insertarViaje(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarViaje = async (req: Request, res: Response) => {
    console.log('vaijeController::listarViaje');
    try {
        const viajes = await viajeService.listarViajes();
        res.status(200).json(ResponseModel.success(viajes));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const obtenerViaje = async (req: Request, res: Response) => {
    console.log('viajeController::obtenerViaje');
    try {
        const { id } = req.params;
        const viajes = await viajeService.obtenerViaje(Number(id));
        res.status(200).json(ResponseModel.success(viajes));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const modificarViaje = async (req: Request, res: Response) => {
    console.log('viajeController::modificarViaje');
    try {
        const { id } = req.params;
        const { error } = modificarViajeSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await viajeService.modificarViaje(Number(id), req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarViaje = async (req: Request, res: Response) => {
    console.log('viajeController::eliminarViaje');
    try {
        const { id } = req.params;
        const response = await viajeService.eliminarViaje(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
