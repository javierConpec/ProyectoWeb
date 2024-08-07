"use strict";
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
const hospedajeRoutes_1 = __importDefault(require("./routes/hospedajeRoutes"));
const viajeRouter_1 = __importDefault(require("./routes/viajeRouter"));
const itinerarioRoutes_1 = __importDefault(require("./routes/itinerarioRoutes"));
const reservaRoutes_1 = __importDefault(require("./routes/reservaRoutes"));
const app = (0, express_1.default)();
<<<<<<< HEAD
<<<<<<< Updated upstream
//ola
//conectar a la bd
//midelwares
//routes
=======
//Database
//Midlewares
app.use(express_1.default.json());
//Routes
app.use('/api/v1.0/roles', rolRoutes_1.default);
app.use('/api/v1.0/pais', paisRoutes_1.default);
app.use('/api/v1.0/categorias', categoriaRoutes_1.default);
app.use('/api/v1.0/paquetes', paqueteRoutes_1.default);
>>>>>>> Stashed changes
=======
// Middleware para parsear JSON
app.use(express_1.default.json());
// Rutas
app.use('/api/v1.0/rol', rolRoutes_1.default);
app.use('/api/v1.0/pais', paisRoutes_1.default);
app.use('/api/v1.0/categoria', categoriaRoutes_1.default);
app.use('/api/v1.0/paquete', paqueteRoutes_1.default);
app.use('/api/v1.0/usuario', usuarioRoutes_1.default);
app.use('/api/v1.0/destino', destinoRoutes_1.default);
app.use('/api/v1.0/hospedaje', hospedajeRoutes_1.default);
app.use('/api/v1.0/viaje', viajeRouter_1.default);
app.use('/api/v1.0/itinerario', itinerarioRoutes_1.default);
app.use('/api/v1.0/reserva', reservaRoutes_1.default);
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
exports.default = app;
//# sourceMappingURL=app.js.map