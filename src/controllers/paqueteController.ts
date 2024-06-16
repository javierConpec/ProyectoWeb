import { Request,Response } from "express";
import * as paqueteService from "../services/paqueteService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarPaquete= async (req: Request, res: Response)=>{
    console.log('paqueteController::insertarCategoria');
    try{
        const response = await paqueteService.insertarPaquete(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    }catch(error){
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarPaquetes = async (req: Request, res: Response)=>{
    console.log('paqueteController::listarPaquetes');
    try{
        const paquetes=await paqueteService.listarPaquetes();
        res.status(200).json(ResponseModel.success(paquetes));
    }catch(error){
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerPaquete = async (req:Request, res:Response) => {
    console.log('paqueteController::obtenerPaquete');
    try{
        const { id }=req.params;
        const paquete=await paqueteService.obtenerPaquete(Number(id));
        res.status(200).json(ResponseModel.success(paquete));
    }catch(error){
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarPaquete = async (req:Request, res:Response) => {
    console.log('paqueteController::modificarPaquete');
    try{
        const{id}=req.params;
        const  response=await paqueteService.modificarPaquete(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response))
    }catch(error){
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message))
    }
}

export const eliminarPaquete = async(req:Request, res:Response)=>{
    console.log('paqueteController::eliminarPaquete');
    try{
        const { id}=req.params;
        const response=await paqueteService.eliminarPaquete(Number(id));
        res.status(200).json(ResponseModel.success(null,response))
    }catch(error){
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    }  
}
