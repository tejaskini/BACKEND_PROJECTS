import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./constants.js"
import express from "express";
import connectDb from "./db/db.js";

dotenv.config(
   {
     path: '/.env'
   }
);

connectDb();














/*
const app = express();

// eifi approch (async () => {})

; (async () => {

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("Failed to connect to the database");
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }

})()
*/

