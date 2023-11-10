import { IPersona } from "./i-persona";

export interface IPersonadata extends IPersona {

    codNacionalidad: string;
    hobbies: string;
    codGenero: string;
    equipos: string;
    otrasActividades: string;
}
