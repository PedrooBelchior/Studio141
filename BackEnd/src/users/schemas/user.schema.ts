import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    usuario: String,
    password: String,
    email: String,
    cpf: String,
    endereco:[
        {
            rua: String,
            numero: String,
            bairro: String,
            complemento: String,
            cep: String,
            cidade: String,
            estado: String,
            pais: String,
        }
    ],
    tipo: String,
    nome: String,
    sobrenome: String,
    statusUsuario: String,
})