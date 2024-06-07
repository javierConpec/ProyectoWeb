"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rolController_1 = require("../controllers/rolController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', rolController_1.insertarRol);
router.get('/', rolController_1.listarRoles);
router.get('/:id', rolController_1.obtenerRol);
router.put('/:id', rolController_1.modificarRol);
router.delete('/:id', rolController_1.eliminarRol);
exports.default = router;
//# sourceMappingURL=rolesRoutes.js.map