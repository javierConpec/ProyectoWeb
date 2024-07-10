import { Request,Response } from "express";
import * as paisService from "../services/paisService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarPaisSchema,modificarPaisSchema } from "../schemas/paisSchema";

export const insertarPais = async (req: Request, res: Response) => {
    console.log('paisContoller::insertarPais');
    try {
        const { error } = insertarPaisSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await paisService.insertarPais(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarPaises = async (req: Request, res: Response)=>{
    console.log('paisContoller::listarPaises');
    try{
        const paises=await paisService.listarPaises();
        res.status(200).json(ResponseModel.success(paises));
    }catch(error){
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerPais = async (req:Request, res:Response) => {
    console.log('paisController::obtenerPais');
    try{
        const { id }=req.params;
        const pais=await paisService.ObtenerPais(Number(id));
        res.status(200).json(ResponseModel.success(pais));
    }catch(error){
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarPais = async (req: Request, res: Response) => {
    console.log('paisController::modificarPais');
    try {
        const { id } = req.params;
        const { error } = modificarPaisSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message, 400));
            return;
        }
        const response = await paisService.modificarPais(Number(id), req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarPais = async(req:Request, res:Response)=>{
    console.log('paisController::eliminarPais');
    try{
        const { id}=req.params;
        const response=await paisService.eliminarPais(Number(id));
        res.status(200).json(ResponseModel.success(null,response))
    }catch(error){
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    }  
}
