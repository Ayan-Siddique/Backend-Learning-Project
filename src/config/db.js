import mongoose from "mongoose";

async function connectDb() {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully "+ connectionInstance.connection.host);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

export default connectDb;
