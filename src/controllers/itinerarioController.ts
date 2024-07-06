import { Request,Response } from "express";
import * as itinerarioService from "../services/itinerarioService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarItinerarioSchema,modificarItinerarioSchema } from "../schemas/itinerarioSchema";

export const insertarItinerario = async (req: Request, res: Response) => {
    console.log('itinerarioController::insertarItinerario');
    try {
        const { error } = insertarItinerarioSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await itinerarioService.insertarItinerario(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarItinerarios = async (req: Request, res: Response) => {
    console.log('itnerarioController::listarItinerarios');
    try {
        const itinerario = await itinerarioService.listarItinerarios();
        res.status(200).json(ResponseModel.success(itinerario));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const obtnerItinerario = async (req: Request, res: Response) => {
    console.log('itinerarioController::obtenerItinerario');
    try {
        const { id } = req.params;
        const itinerario = await itinerarioService.obtenerItinerario(Number(id));
        res.status(200).json(ResponseModel.success(itinerario));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const modificarItinerario = async (req: Request, res: Response) => {
    console.log('itinerarioController::modificarItinerario');
    try {
        const { id } = req.params;
        const { error } = modificarItinerarioSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await itinerarioService.modificarItinerario(Number(id), req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarItinerario = async (req: Request, res: Response) => {
    console.log('itinerarioController::eliminarItinerario');
    try {
        const { id } = req.params;
        const response = await itinerarioService.eliminarItinerario(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
