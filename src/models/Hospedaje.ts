import { Decimal } from "@prisma/client/runtime/library";
import { IDestino } from "./Destino";

export interface IHospedaje{
    idHospedaje:number;
    destino:IDestino;
    nombre:string;
    precio:Decimal;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;

}

