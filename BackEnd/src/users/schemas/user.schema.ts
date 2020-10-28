import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    usuario: String,
    senha: String,
    tipo: String,
    nome: String,
    statusUsuario: String
      
})