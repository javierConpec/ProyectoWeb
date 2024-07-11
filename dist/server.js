"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const swagger_1 = require("./swagger");
const PORT = 3000;
app_1.default.listen(PORT, () => {
    console.log(`App escuchando en puerto ${PORT}`);
    (0, swagger_1.swaggerDocs)(app_1.default, PORT);
});
//# sourceMappingURL=server.js.map