/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */

import express, { Application } from 'express';
import rolesRoutes from './routes/rolRoutes';
import paisRoutes from './routes/paisRoutes';

const app: Application = express();

//Database

//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1.0/roles',rolesRoutes);
app.use('/api/v1.0/pais',paisRoutes);

export default app;
