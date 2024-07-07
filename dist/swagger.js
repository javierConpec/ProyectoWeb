"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Viajes en Grupo API Documentation',
            version: '1.0.0',
            description: 'Documentación de la API para Viajes en Grupo\n' +
                'Integrantes:\n' +
                'Contreras Peceros Javier\n' +
                'Oyola Aldo\n' +
                'Vinces Jesus'
        },
    },
    // Aquí va la ruta del archivo de routes 
    apis: ['./src/routes/*.ts'],
};
// Genera el documento Swagger en formato JSON
const swaggerSpec = swaggerJSDoc(options);
// Función para configurar Swagger en Express
const swaggerDocs = (app, port) => {
    // Endpoint para la interfaz de usuario de Swagger
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Endpoint para acceder al JSON de Swagger
    app.get('/api/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    // Url de la documentacion
    console.log(`Documentación de la API disponible en http://localhost:${port}/api/v1/docs`);
};
exports.swaggerDocs = swaggerDocs;
//# sourceMappingURL=swagger.js.map