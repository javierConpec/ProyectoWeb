import { IDestino } from "./Destino"; 
import { ICategoria } from "./Categoria";
import { IHospedaje } from "./Hospedaje";
import { IPaquete } from "./Paquete";

export interface IViaje{
    idViaje:number;
    categoria:ICategoria;
    destino:IDestino;
    hospedaje:IHospedaje;
    paquete:IPaquete;
    fechaInicio:Date;
    fechaFin:Date;
    tarifa:Number;
    estadoAuditoria:string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}