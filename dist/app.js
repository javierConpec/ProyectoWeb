"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
exports.default = app;
//# sourceMappingURL=app.js.map