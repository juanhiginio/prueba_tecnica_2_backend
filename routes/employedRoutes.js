import express from 'express';

// Importamos el controlador de employees
import employedController from "../controllers/employed.controller.js";

const router = express.Router();

router.get("/api/employees/:idEmployed", employedController.getEmployedById);

router.get("/api/employees", employedController.getAllEmployees);

router.post("/api/employees", employedController.createEmployed);

router.patch("/api/employees/:idEmployed", employedController.updateEmployedById);

router.delete("/api/employees/:idEmployed", employedController.deleteOneEmployedById);

router.delete("/api/employees/", employedController.deleteAllEmployes);

export default router;