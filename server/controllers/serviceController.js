import Service from "../models/ServiceModel.js";

export const addService = async (req, res) => {
    try {
        const { title, description, category } = req.body;

        if (!title || !description || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const image = req.file ? req.file.path : null;

        const service = await Service.create({
            title,
            description,
            category,   
            image
        });

        return res.status(201).json({
            message: "Service added successfully.",
            service
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllService = async (req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });
        return res.json(services);
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}

export const getServiceById = async (req, res) => {
    try {
        const {id} = req.params;
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        return res.json(service);
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}

export const deleteService = async (req, res) => {
    try {
        const {id} = req.params;
        const service = await Service.findByIdAndDelete(id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        return res.json({ message: "Service deleted successfully." });
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}

export const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, category } = req.body;
        const image = req.file ? req.file.path : null;

        const service = await Service.findById(id);

        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        const updated = await Service.findByIdAndUpdate(id, {
            title: title || service.title,
            description: description || service.description,
            category: category || service.category, 
            image: image || service.image
        }, { new: true });

        return res.json({
            message: "Service updated successfully.",
            service: updated
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};