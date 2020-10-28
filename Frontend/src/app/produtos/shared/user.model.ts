export interface User {
    _id: string;
    usuario: string;
    senha: string;
    tipo: string;
    nome: string;
    statusUsuario: string;
}

// GET User
export interface ResponseUsers {
    users: User[];
}

// GET User
export interface ResponseUser {
    data: User;
}
