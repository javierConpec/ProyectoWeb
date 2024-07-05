import { PrismaClient, usuarios } from "@prisma/client";
import { IUsuario } from "../models/usuario";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK,RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaUsuario,toPrismaUsuario } from "../mappers/usuarioMapper";

const prisma = new  PrismaClient();

export const insertarUsuario = async(usuario:IUsuario)=>{
    await prisma.usuario.create({
        data:toPrismaUsuario(usuario)
    });
    return RESPONSE_INSERT_OK
}