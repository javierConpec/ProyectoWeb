import { IUsuario } from "./usuario";
import { IViaje } from "./Viaje";

export interface IReserva{
    idReserva : number;
    ususario:IUsuario;
    viaje:IViaje;
    numeroPersonas:number;
    metodoPago:string;
    pagoTotal:number;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}