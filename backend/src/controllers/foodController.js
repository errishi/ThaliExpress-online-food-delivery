import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;        //Store the image file in this variable
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });
    try {
        await food.save();
        res.status(200).json({ success: true, message: "Food added" });
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "Error" });
    }
}

//All food list
const allFoodList = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.status(200).json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "Error" });
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        if (!food) {
            return res
                .status(404)
                .json({ success: false, message: "Food not found" });
        }

        // delete image file if it exists
        if (food.image) {
            fs.unlink(`./src/uploads/${food.image}`, (err) => {
                if (err) {
                    console.error("Error deleting image:", err.message);
                }
            });
        }

        await foodModel.findByIdAndDelete(req.body.id);

        res.status(200).json({ success: true, message: "Food deleted successfully" });
    } catch (error) {
        console.error("Remove food error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export { addFood, allFoodList, removeFood };