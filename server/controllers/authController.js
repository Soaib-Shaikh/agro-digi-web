import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }
        const newUser = await User.create({name, email, password});

        return res.status(201).json({message: "User Registered Successfully.", user: newUser});

    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )
        return res.status(200).json({message: "Login successful", token, user});  
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}