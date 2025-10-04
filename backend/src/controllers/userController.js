import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    if (!validator.isEmail(email)) {
        return res.status(422).json({ success: false, message: "invalid email" })
    }
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({success: false, message: "Invalid credentials"});
        }

        const token = userToken(user._id);
        res.status(201).json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.status(422).json({success: false, message: "Validation error !"});
    }
}

const userToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

//register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //checking user already exist ?
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        //validate email formate and strong password
        if (!validator.isEmail(email)) {
            return res.status(422).json({ success: false, message: "invalid email" })
        }

        if (password.length < 8) {
            return res.status(422).json({ success: false, message: "weak password" });
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = userToken(user._id);
        res.status(201).json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "unknown issue" })
    }
}

export { loginUser, registerUser };