import Category from "../models/CategoryModel.js";
import Product from "../models/ProductModel.js";

export const addCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Category name is required" });
        }

        const exists = await Category.findOne({
            name: name.trim().toLowerCase(),
        });

        if (exists) {
            return res.status(400).json({ message: "Category already exists" });
        }

        const category = await Category.create({
            name: name.trim(),
        });

        return res
            .status(201)
            .json({ message: "Category Add Successfully.", category });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllCategories = async (req, res) => {
    try {
        let { page = 1, limit = 10, search = "" } = req.query;

        page = Number(page);
        limit = Number(limit);

        const query = {};

        if (search) {
            query.name = { $regex: search.trim(), $options: "i" };
        }

        const total = await Category.countDocuments(query);

        const categories = await Category.find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });

        res.json({
            total,
            page,
            pages: Math.ceil(total / limit),
            categories,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const used = await Product.findOne({ category: id });

    if (used) {
      return res.status(400).json({
        message: "Category is used in products, cannot delete",
      });
    }

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};