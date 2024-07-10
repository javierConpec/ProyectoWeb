import { IDestino } from "./Destino";
import { IPaquete } from "./Paquete";

export interface IViaje{
    idViaje:number;
    destino:IDestino;
    paquete:IPaquete;
    fechaInicio:Date;
    fechaFin:Date;
    tarifa:Number;
    estadoAuditoria:string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}