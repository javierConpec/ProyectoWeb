import { IPais } from "./Pais";


export interface IDestino {
    idDestino: number;
    pais: IPais;
    nombre: string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}