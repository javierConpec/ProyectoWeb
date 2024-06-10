import { Request, Response } from "express"
import * as rolService from "../services/rolService";
import { ResponseModel } from "../models/ResponseModel";


export const insertarRol = async (req: Request, res: Response) => {
    console.log('rolController::insertarrol');
    try {
        const response = await rolService.insertarRol(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarRoles = async (req: Request, res: Response) => {
    console.log('rolController::listarRoles');
    try {
        const roles = await rolService.listarRoles();
        res.status(200).json(ResponseModel.success(roles));
    } catch (error) {
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerRol = async (req: Request, res: Response) => {
    console.log('rolController::obtenerRol');
    try {
        const { id } = req.params;
        const rol = await rolService.obtenerRol(Number(id))
        res.status(200).json(ResponseModel.success(rol));
    } catch (error) {
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    } 
}

export const modificarRol = async (req: Request, res: Response) => {
    console.log('rolController::modificarRol');
    try {
        const { id } = req.params;
        const response = await rolService.modificarRol(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarRol = async (req: Request, res: Response) => {
    console.log('rolController::eliminarRol');
    try {
        const { id } = req.params;
        const response = await rolService.eliminarRol(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message)
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}