"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaUsuario = exports.fromPrismaUsuario = void 0;
const rolMapper_1 = require("./rolMapper");
const fromPrismaUsuario = (usuarios, rol) => ({
    idUsuario: usuarios.id_usuario,
    rol: (0, rolMapper_1.fromPrismaRol)(rol),
    nombre: usuarios.nombres,
    apellidoPaterno: usuarios.apellido_paterno,
    apellidoMaterno: usuarios.apellido_materno,
    username: usuarios.username,
    email: usuarios.email,
    clave: usuarios.clave,
    telefono: usuarios.telefono,
    direccion: usuarios.direccion,
    sexo: usuarios.sexo
});
exports.fromPrismaUsuario = fromPrismaUsuario;
const toPrismaUsuario = (usuarios) => ({
    id_usuario: usuarios.idUsuario,
    id_rol: usuarios.rol.idRol,
    nombres: usuarios.nombres,
    apellido_paterno: usuarios.apellidoPaterno,
    apellido_materno: usuarios.apellidoMaterno,
    username: usuarios.username,
    email: usuarios.email,
    clave: usuarios.clave,
    telefono: usuarios.telefono,
    direccion: usuarios.direccion,
    sexo: usuarios.sexo,
});
exports.toPrismaUsuario = toPrismaUsuario;
//# sourceMappingURL=usuarioMapper.js.map