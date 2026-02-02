import express from "express";
import Equipment from "../models/Equipment.js";
const router = express.Router();

//Import controller
import EquipmentController from "../controllers/EquipmentController.js";

router.get("/", EquipmentController.showEquipments);
router.get("/add", EquipmentController.createEquipments);
router.post("/add", EquipmentController.createEquipmentsSave);
router.post("/delete", EquipmentController.deleteEquipments);


export default router;