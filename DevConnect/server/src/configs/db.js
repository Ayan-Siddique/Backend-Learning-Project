import config  from "./env.js";
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.error("Error connecting to Database:", error);
  }
};

export default connectDb;