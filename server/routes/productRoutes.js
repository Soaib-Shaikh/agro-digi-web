import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/productController.js';
import { isAdmin } from '../middlewares/adminMiddleware.js';
import { protect } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/', protect, isAdmin, upload.single('image'), addProduct)

router.get('/', getAllProducts)
router.get('/:id', getSingleProduct)

router.delete('/:id', protect, isAdmin, deleteProduct)

router.put('/:id', protect, isAdmin, upload.single('image'), updateProduct)

export default router;