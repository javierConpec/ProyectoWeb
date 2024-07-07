import app from "./app";
import { swaggerDocs as V1SwaggerDocs } from "./swagger";

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App escuchando en puerto ${PORT}`);
    V1SwaggerDocs(app, PORT);
});
