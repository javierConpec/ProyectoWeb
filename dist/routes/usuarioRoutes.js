"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioController_1 = require("../controllers/usuarioController");
const router = express_1.default.Router();
router.post('/', usuarioController_1.insertarUsuario);
router.get('/', usuarioController_1.listarUsuarios);
router.get('/:id', usuarioController_1.obtenerUsuario);
router.put('/:id', usuarioController_1.modificarUsuario);
router.delete('/:id', usuarioController_1.eliminarUsuario);
exports.default = router;
//# sourceMappingURL=usuarioRoutes.js.map