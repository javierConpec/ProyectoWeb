import { PrismaClient, roles } from "@prisma/client";
import { IRol } from "../models/Rol";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK,
         RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaRol, toPrismaRol } from "../mappers/rolMapper";

const prisma = new PrismaClient();

export const insertarRol = async (rol: IRol) => {
    await prisma.roles.create({      
        data: toPrismaRol(rol)
    });
    return RESPONSE_INSERT_OK;
}


export const listarRoles = async () => {
    const rol: roles[] = await prisma.roles.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return rol.map((rol: roles)=> fromPrismaRol(rol));
}

export const obtenerRol = async (idRol: number) => {
    console.log('rolService::obtenerRol',idRol);
    
    const rol: roles = await prisma.roles.findUnique({
        where: {
            id_rol: idRol,
            estado_auditoria: '1'
        }
    });
    return fromPrismaRol(rol)
}

export const modificarRol = async (idRol: number, rol:IRol) => {
    console.log('rolService::modificarRol',idRol,rol);

    await prisma.roles.update({
        data: toPrismaRol(rol),
        where:{
            id_rol: idRol
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarRol = async (idRol: number) => {
    console.log('rolService::eliminarRol',idRol);
    await prisma.roles.update({
        data:{
            estado_auditoria:'0'
        },
        where:{
            id_rol: idRol
        }
    })
    return RESPONSE_DELETE_OK;
}
