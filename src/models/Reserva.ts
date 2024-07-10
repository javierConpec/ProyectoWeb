import { IUsuario } from "./Usuario";
import { IViaje } from "./Viaje";

export interface IReserva{
    idReserva : number;
    usuario:IUsuario;
    viaje:IViaje;
    numeroPersonas:number;
    metodoPago:string;
    pagoTotal:number;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}