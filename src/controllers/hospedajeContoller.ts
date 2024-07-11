import { Request,Response } from "express";
import  * as hospedajeService from "../services/hospedajeService";
import { ResponseModel } from "../models/ResponseModel";
//import { insertarHospedajeSchema, modificarHospedajeSchema } from "../schemas/hospedajeSchema";

export const insertarHospedaje = async (req:Request, res: Response)=>{
    console.log('hospedajeContrller::insertarHospedaje');
    try{
        const response = await hospedajeService.insertarHospedaje(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    }catch(error){
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}


export const listarHospedajes = async (req: Request, res: Response) => {
    console.log('hospedajeController::listarHospedajes');
    try {
        const hospedaje = await hospedajeService.listarHospedajes();
        res.status(200).json(ResponseModel.success(hospedaje));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const obtenerHospedaje = async (req: Request, res: Response) => {
    console.log('hospedajeContoller::obtenerHospedaje');
    try {
        const { id } = req.params;
        const hospedaje = await hospedajeService.obtenerHospedaje(Number(id));
        res.status(200).json(ResponseModel.success(hospedaje));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const modifiicarHospedaje = async (req: Request, res: Response) => {
    console.log('hospedajeController::modiificarHospedaje');
    try {
        const { id } = req.params;
        const response = await hospedajeService.modificarHospedaje(Number(id), req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarHospedaje = async (req: Request, res: Response) => {
    console.log('hospedajeContoller::eliminarHospedaje');
    try {
        const { id } = req.params;
        const response = await hospedajeService.eliminarHospedaje(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};
