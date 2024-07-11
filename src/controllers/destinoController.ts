import { Request, Response } from "express";
import * as destinoService from "../services/destinoService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarDestinoSchema, modificarDestinoSchema } from "../schemas/destinoSchema";

export const insertarDestino = async (req: Request, res: Response) => {
    console.log('destinoController::insertarDestino');
    try {
        const { error } = insertarDestinoSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await destinoService.insertarDestino(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarDestinos = async (req: Request, res: Response) => {
    console.log('destinoController::listarDestinos');
    try {
        const destinos = await destinoService.listarDestinos();
        res.status(200).json(ResponseModel.success(destinos));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const obtenerDestino = async (req: Request, res: Response) => {
    console.log('destinoController::obtenerDestino');
    try {
        const { id } = req.params;
        const destino = await destinoService.obtenerDestino(Number(id));
        res.status(200).json(ResponseModel.success(destino));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const modificarDestino = async (req: Request, res: Response) => {
    console.log('destinoController::modificarDestino');
    try {
        const { id } = req.params;
        const { error } = modificarDestinoSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await destinoService.modificarDestino(Number(id), req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarDestino = async (req: Request, res: Response) => {
    console.log('destinoController::eliminarDestino');
    try {
        const { id } = req.params;
        const response = await destinoService.eliminarDestino(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};
