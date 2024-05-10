
import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import bookRoute from "./Routes/book.route.js"
import userRoute from "./Routes/user.route.js"
const app = express();
dotenv.config();
const port = process.env.PORT||3000;
const URI=process.env.MONGODB_URI;
app.use(cors());
app.use(express.json()); // data Sending from body is parsed into  json

// Connect to Mongo Db
try {
    mongoose.connect(URI);
    console.log("Connected to Mongo DB");
} catch (error) {
    console.log("Err ",error)
}

// Definig Routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})