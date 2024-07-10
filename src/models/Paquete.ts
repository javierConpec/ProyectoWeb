import {ICategoria} from './Categoria'
import {IHospedaje} from './Hospedaje'
export interface IPaquete{
    idPaquete: number;
    categoria: ICategoria;
    hospedaje:IHospedaje;
    nombre: string;
    transporte: string;
    precio: Number;
    estadoAuditoria:string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}