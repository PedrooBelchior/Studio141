import { Document } from 'mongoose';


export class User extends Document {
    usuario: string;
    senha: string;
    tipo: string;
    nome: string;
    status: string;
}
