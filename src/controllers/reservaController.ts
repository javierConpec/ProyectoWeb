import { Request,Response } from "express";
import * as reservaService from "../services/reservaService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarReservaSchema,modificarReservaSchema } from "../schemas/reservaSchema";

export const insertarReserva = async (req: Request, res: Response) => {
    console.log('reservaController::insertarReserva');
    try {
        const { error } = insertarReservaSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await reservaService.insertarResrva(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarReservas = async (req: Request, res: Response) => {
    console.log('reservaConotroller::listarReserva');
    try {
        const reserva = await reservaService.listarResrvas();
        res.status(200).json(ResponseModel.success(reserva));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const obtenerResrva = async (req: Request, res: Response) => {
    console.log('resrvaController::obtenerReserva');
    try {
        const { id } = req.params;
        const reserva = await reservaService.obtenerReserva(Number(id));
        res.status(200).json(ResponseModel.success(reserva));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const modificarReserva = async (req: Request, res: Response) => {
    console.log('reservaController::modificarReserva');
    try {
        const { id } = req.params;
        const { error } = modificarReservaSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await reservaService.modificarReserva(Number(id), req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarReserva = async (req: Request, res: Response) => {
    console.log('reservaControlller::eliiinarReserva');
    try {
        const { id } = req.params;
        const response = await reservaService.eliminarReserva(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
