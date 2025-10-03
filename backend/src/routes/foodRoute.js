import express from "express";
import { addFood, allFoodList, removeFood } from "../controllers/foodController.js";
import multer from "multer";
const foodRouter = express.Router();

//Image storage engine
const storage = multer.diskStorage({
    destination: "./src/uploads",
    filename: (req, file, callback)=>{
        return callback(null, `${Date.now()}${file.originalname}`)
    }
});

const upload = multer({storage: storage});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", allFoodList);
foodRouter.post("/remove", removeFood);

export default foodRouter;
