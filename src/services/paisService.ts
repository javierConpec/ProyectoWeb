import { PrismaClient, pais } from "@prisma/client";
import { IPais } from "../models/Pais";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK,RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaPais, toPrismaPais } from "../mappers/paisMapper";

const prisma = new PrismaClient();

export const insertarPais = async (pais: IPais)=>{
    await prisma.pais.create({
        data:toPrismaPais(pais)
    });
    return RESPONSE_INSERT_OK;
}

export const listarPaises=async()=>{
    const pais: pais[]=await prisma.pais.findMany();
    return pais.map((pais:pais)=> fromPrismaPais(pais));
}

export const ObtenerPais = async (idPais:number)=>{
    console.log('paisService::obtenerPais',idPais);

    const pais: pais = await prisma.pais.findUnique({
        where:{
            id_pais: idPais
        }
    });
    return fromPrismaPais(pais)   
}

export const modificarPais = async (idPais: number, pais:IPais)=>{
    console.log('paisService::modificarPais',idPais,pais);

    await prisma.pais.update({
        data: toPrismaPais(pais),
        where:{
            id_pais: idPais
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarPais = async (idPais: number)=>{
    console.log('paisService::eliminarPais',idPais);

    await prisma.pais.delete({
        where:{
            id_pais:idPais
        }
    });
    return RESPONSE_DELETE_OK;
}
