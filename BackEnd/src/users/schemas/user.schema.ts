import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    usuario: String,
    password: String,
    email: String,
    cpf: String,
    tipo: String,
    nome: String,
    statusUsuario: String,
})