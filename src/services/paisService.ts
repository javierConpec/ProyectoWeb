import { PrismaClient, paises } from "@prisma/client";
import { IPais } from "../models/Pais";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK,RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaPais, toPrismaPais } from "../mappers/paisMapper";

const prisma = new PrismaClient();

export const insertarPais = async (pais: IPais)=>{
    await prisma.paises.create({
        data:toPrismaPais(pais)
    });
    return RESPONSE_INSERT_OK;
}

export const listarPaises=async()=>{
    const paises: paises[]=await prisma.paises.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return paises.map((pais: paises)=> fromPrismaPais(pais));
}

export const ObtenerPais = async (idPais:number)=>{
    console.log('paisService::obtenerPais',idPais);

    const pais: paises = await prisma.paises.findUnique({
        where:{
            id_pais: idPais,
            estado_auditoria: '1'
        }
    });
    return fromPrismaPais(pais)   
}

export const modificarPais = async (idPais: number, pais:IPais)=>{
    console.log('paisService::modificarPais',idPais,pais);

    await prisma.paises.update({
        data: toPrismaPais(pais),
        where:{
            id_pais: idPais
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarPais = async (idPais: number)=>{
    console.log('paisService::eliminarPais',idPais);

    await prisma.paises.update({
        data:{
            estado_auditoria:'0'
        },
        where:{
            id_pais:idPais
        }
    })
    return RESPONSE_DELETE_OK;
}
