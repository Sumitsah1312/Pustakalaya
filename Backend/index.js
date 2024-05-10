
import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"


const app = express();

dotenv.config();
const port = process.env.PORT||3000;
const URI=process.env.MONGODB_URI;

// Connect to Mongo Db
try {
    mongoose.connect(URI);
    console.log("Connected to Mongo DB");
} catch (error) {
    console.log("Err ",error)
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})