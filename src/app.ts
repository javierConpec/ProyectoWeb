/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */

import express, { Application } from 'express';
import rolesRoutes from './routes/rolRoutes';
import paisRoutes from './routes/paisRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import paqueteRoutes from './routes/paqueteRoutes';
import usuarioRoutes from './routes/usuarioRoutes'
import destinoRoutes from './routes/destinoRoutes';
import hospedajeRoutes from './routes/hospedajeRoutes';
import viajeRouter from './routes/viajeRouter';
import itinerarioRouter from './routes/itinerarioRoutes';
import reservaRoutes from './routes/reservaRoutes';

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
app.use('/api/v1.0/hospedaje',hospedajeRoutes);
app.use('/api/v1.0/viaje',viajeRouter);
app.use('/api/v1.0/itinerario',itinerarioRouter);
app.use('/api/v1.0/itinerario',reservaRoutes);
export default app;
