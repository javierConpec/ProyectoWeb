/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */

import express, { Application } from 'express';
import rolesRoutes from './routes/rolRoutes';
import paisRoutes from './routes/paisRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import paqueteRoutes from './routes/paqueteRoutes';

const app: Application = express();



//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1.0/roles',rolesRoutes);
app.use('/api/v1.0/paises',paisRoutes);
app.use('/api/v1.0/categorias',categoriaRoutes);
app.use('/api/v1.0/paquetes',paqueteRoutes);
export default app;
