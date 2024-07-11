
import { IViaje } from "./Viaje";
export interface IItinerario{
    idItinerario:number,
    viaje:IViaje,
    dia:string,
    horaInicio:string,
    horaFin:string,
    actividad:string
    dscripcion:string,
    estadoAuditoria:string;
    fechaCreacion: Date;
    fechaModificacion: Date;

}
