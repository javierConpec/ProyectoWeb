"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gestión de Países',
            version: '1.0.0',
            description: 'Documentación de la API para la gestión de países',
        },
        servers: [
            {
                url: 'http://localhost:3000/api/v1.0',
            },
        ],
    },
    apis: ['./routes/*.ts'], // Ruta a tus archivos de rutas
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function swaggerDocs(app, port) {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    console.log(`Swagger docs disponibles en http://localhost:${port}/api-docs`);
}
exports.swaggerDocs = swaggerDocs;
//# sourceMappingURL=swagger.js.map