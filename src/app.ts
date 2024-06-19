import express, {Application} from 'express';

const  app: Application = express();
//hello
//ola

//conectar a la bd

//midelwares

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
