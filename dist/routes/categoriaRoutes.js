"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoriaController_1 = require("../controllers/categoriaController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', categoriaController_1.insertarCategoria);
router.get('/', categoriaController_1.listarCategorias);
router.get('/:id', categoriaController_1.obtenerCategoria);
router.put('/:id', categoriaController_1.modificarCategoria);
router.patch('/:id', categoriaController_1.eliminarCategoria);
exports.default = router;
//# sourceMappingURL=categoriaRoutes.js.map