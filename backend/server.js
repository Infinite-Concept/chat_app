const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const UserModel = require("./Models/User")


dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const app = express();


app.post("/register", async(req, res) => {
    const {username, password} = req.body;

    const createdUser = await UserModel.create({username, password});
    jwt.sign({userId: createdUser._id}, )
})

app.listen(5868, () => {
    console.log("server is listening on port 5868");
})