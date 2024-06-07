/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */

import express, { Application } from 'express';
import rolesRoutes from './routes/rolRoutes';

const app: Application = express();

//Database

//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1.0/roles',rolesRoutes);

export default app;
