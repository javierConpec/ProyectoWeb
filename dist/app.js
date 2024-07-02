"use strict";
/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rolRoutes_1 = __importDefault(require("./routes/rolRoutes"));
const paisRoutes_1 = __importDefault(require("./routes/paisRoutes"));
const categoriaRoutes_1 = __importDefault(require("./routes/categoriaRoutes"));
const paqueteRoutes_1 = __importDefault(require("./routes/paqueteRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const destinoRoutes_1 = __importDefault(require("./routes/destinoRoutes"));
const app = (0, express_1.default)();
//Midlewares
app.use(express_1.default.json());
//Routes
app.use('/api/v1.0/rol', rolRoutes_1.default);
app.use('/api/v1.0/pais', paisRoutes_1.default);
app.use('/api/v1.0/categoria', categoriaRoutes_1.default);
app.use('/api/v1.0/paquete', paqueteRoutes_1.default);
app.use('/api/v1.0/usuario', usuarioRoutes_1.default);
app.use('/api/v1.0/destino', destinoRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map