// Importamos el modelo de Departament
import Departament from "../models/Departament.js";

import express from 'express';

// Importamos el controlador de departaments
import departamentController from "../controllers/departament.controller.js";

const router = express.Router();

router.get("/api/departaments/:idDepartament", departamentController.getDepartamentById);

router.get("/api/departaments", departamentController.getAllDepartaments);

router.post("/api/departaments", departamentController.createDepartament);

router.patch("/api/departaments/:idDepartament", departamentController.updateDepartament);

router.delete("/api/departaments/:idDepartament", departamentController.deleteOneDepartament);

router.delete("/api/departaments/", departamentController.deleteAllDepartaments);

export default router;