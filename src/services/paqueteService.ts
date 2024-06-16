import { PrismaClient, paquetes } from "@prisma/client";
import { IPaquete } from "../models/Paquete";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK,RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaPaquete, toPrismaPaquete } from "../mappers/paqueteMapper";

const prisma = new PrismaClient();

export const insertarPaquete = async (paquete: IPaquete)=>{
    await prisma.paquetes.create({
        data:toPrismaPaquete(paquete)
    });
    return RESPONSE_INSERT_OK;
}

export const listarPaquetes=async()=>{
    const paquetes: paquetes[]=await prisma.paquetes.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return paquetes.map((paquete: paquetes)=> fromPrismaPaquete(paquete));
}

export const obtenerPaquete = async (idPaquete:number)=>{
    console.log('paqueteService::obtenerPaquete',idPaquete);

    const paquete: paquetes = await prisma.paquetes.findUnique({
        where:{
            id_paquete: idPaquete,
            estado_auditoria: '1'
        }
    });
    return fromPrismaPaquete(paquete)   
}

export const modificarPaquete = async (idPaquete: number, paquete:IPaquete)=>{
    console.log('paqueteService::modificarPaquete',idPaquete,paquete);

    await prisma.paquetes.update({
        data: toPrismaPaquete(paquete),
        where:{
            id_paquete: idPaquete
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarPaquete = async (idPaquete: number)=>{
    console.log('paqueteService::eliminarPaquete',idPaquete);

    await prisma.paquetes.update({
        data:{
            estado_auditoria:'0'
        },
        where:{
            id_paquete: idPaquete
        }
    })
    return RESPONSE_DELETE_OK;
}
