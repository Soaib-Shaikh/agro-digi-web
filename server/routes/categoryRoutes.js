import express from 'express';
import { addCategory, deleteCategory, getAllCategories } from '../controllers/categoryController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post('/',protect, isAdmin ,addCategory);

router.get('/', getAllCategories)

router.delete('/:id', protect, isAdmin, deleteCategory)

export default router;