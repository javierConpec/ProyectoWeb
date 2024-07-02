/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */

import express, { Application } from 'express';
import rolesRoutes from './routes/rolRoutes';
import paisRoutes from './routes/paisRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import paqueteRoutes from './routes/paqueteRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import destinoRoutes from './routes/destinoRoutes';

const app: Application = express();



//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1.0/rol',rolesRoutes);
app.use('/api/v1.0/pais',paisRoutes);
app.use('/api/v1.0/categoria',categoriaRoutes);
app.use('/api/v1.0/paquete',paqueteRoutes);
app.use('/api/v1.0/usuario',usuarioRoutes);
app.use('/api/v1.0/destino',destinoRoutes);
export default app;
