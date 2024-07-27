import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/Route_Event")
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.log("Error connecting to database");
    });