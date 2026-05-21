import { sendEmail } from "../configs/mail.js";
import Contact from "../models/ContactModel.js";

export const sendContact = async (req, res) => {
    try {
        const {name, email,phone, message} = req.body;
        const newContact = await Contact.create({
            name, 
            email, 
            phone, 
            message,  
            user: req.user._id,
        });
        await sendEmail({ name, email, phone, message });
        return res.status(201).json({message: "Message sent successfully.", contact: newContact})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getAllContacts = async (req,res) => {
    try {
        const contacts = await Contact.find().sort({createdAt: -1});
        return res.status(200).json({contacts});
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}

export const deleteContact = async (req,res) => {
    try {
        const {id} = req.params;
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        return res.status(200).json({ message: "Contact deleted successfully." });
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}
