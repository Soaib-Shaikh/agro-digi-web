import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './configs/db.js';
dotenv.config();

import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import contactRoutes from './routes/contactRoutes.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/contacts', contactRoutes)

app.listen(port, (err) => {
    if(!err){
        console.log(`Server running on http://localhost:${port}`);
        db();
    }
})