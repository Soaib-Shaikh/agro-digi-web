import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configs/cloudinary.js";


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "agro-digi",
        allowed_formats: ["jpg", "jpeg", "png", "gif", "pdf"],
    },
});

const upload = multer({ storage})

export default upload;