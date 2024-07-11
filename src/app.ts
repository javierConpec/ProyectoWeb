import express, { Application } from 'express';
import rolesRoutes from './routes/rolRoutes';
import paisRoutes from './routes/paisRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import paqueteRoutes from './routes/paqueteRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import destinoRoutes from './routes/destinoRoutes';
import hospedajeRoutes from './routes/hospedajeRoutes';
import viajeRouter from './routes/viajeRouter';
import itinerarioRouter from './routes/itinerarioRoutes';
import reservaRoutes from './routes/reservaRoutes';

const app: Application = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/v1.0/rol', rolesRoutes);
app.use('/api/v1.0/pais', paisRoutes);
app.use('/api/v1.0/categoria', categoriaRoutes);
app.use('/api/v1.0/paquete', paqueteRoutes);
app.use('/api/v1.0/usuario', usuarioRoutes);
app.use('/api/v1.0/destino', destinoRoutes);
app.use('/api/v1.0/hospedaje', hospedajeRoutes);
app.use('/api/v1.0/viaje', viajeRouter);
app.use('/api/v1.0/itinerario', itinerarioRouter);
app.use('/api/v1.0/reserva', reservaRoutes);

<<<<<<< HEAD
//routes

<<<<<<< Updated upstream
export default app;
=======
//Routes
app.use('/api/v1.0/roles',rolesRoutes);
app.use('/api/v1.0/paises',paisRoutes);
app.use('/api/v1.0/categorias',categoriaRoutes);
app.use('/api/v1.0/paquetes',paqueteRoutes);
export default app;
>>>>>>> Stashed changes
=======
export default app;
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
