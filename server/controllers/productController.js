import Category from "../models/CategoryModel.js";
import Product from "../models/ProductModel.js"

export const addProduct = async (req, res) => {
    try {
        const { name, category, description } = req.body;

        if (!name || !category) {
            return res.status(400).json({ message: "Name & Category required" });
        }

        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(400).json({ message: "Invalid category" });
        }

        const image = req.file ? req.file.path : null;

        const product = await Product.create({
            name,
            category,
            description,
            image,
        });

        return res
            .status(201)
            .json({ message: "Product Add Successfully.", product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        let { page = 1, limit = 10, search = "", category } = req.query;

        page = Number(page);
        limit = Number(limit);

        const query = {};

        if (search) {
            query.name = { $regex: search.trim(), $options: "i" };
        }

        if (category) {
            query.category = category;
        }

        const total = await Product.countDocuments(query);

        const products = await Product.find(query)
            .populate("category", "name")
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });

        res.status(200).json({
            total,
            page,
            pages: Math.ceil(total / limit),
            limit,
            products,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id).populate("category", "name");

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({
            message: "Product deleted successfully",
            product,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category, description } = req.body;

        let updatedData = {};

        if (name) updatedData.name = name;

        if (category) {
            const categoryExists = await Category.findById(category);
            if (!categoryExists) {
                return res.status(400).json({ message: "Invalid category" });
            }
            updatedData.category = category;
        }

        if (description) updatedData.description = description;

        if (req.file) {
            updatedData.image = req.file.path;
        }

        const product = await Product.findByIdAndUpdate(id, updatedData, {
            new: true,
        });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({
            message: "Product updated successfully",
            product,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};