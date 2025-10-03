import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 8000;

//middleware
app.use(express.json());        //pass data from frontend to backend in json form
app.use(cors());            // access backend from frontend

//DB connection 

main().then(()=>{
    console.log("Connect to DB successfully...")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

//routes
app.get("/", (req,res)=>{
    res.send("Hello world");
});


app.listen(port, ()=>{
    console.log(`server is live at http://localhost:${port}`);
});
