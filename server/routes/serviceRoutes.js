import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/adminMiddleware.js';
import upload from '../middlewares/upload.js';
import { addService, deleteService, getAllService, getServiceById, updateService } from '../controllers/serviceController.js';

const router = express.Router();

router.post("/", protect, isAdmin, upload.single("image"), addService)

router.get("/", getAllService)
router.get("/:id", getServiceById)

router.delete("/:id", protect, isAdmin, deleteService)

router.put("/:id", protect, isAdmin, upload.single("image"), updateService)

export default router;