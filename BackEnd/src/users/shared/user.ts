import { Document } from 'mongoose';


export class User extends Document {
    usuario: string;
    password: string;
    email: string;
    cpf: string;
    tipo: string;
    nome: string;
    status: string;
}
