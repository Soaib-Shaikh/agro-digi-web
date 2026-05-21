import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/adminMiddleware.js';
import { deleteContact, getAllContacts, sendContact } from '../controllers/contactController.js';

const router = express.Router();

router.post("/", protect, sendContact);
router.get("/", protect, isAdmin, getAllContacts)
router.delete("/:id", protect, isAdmin, deleteContact)

export default router;