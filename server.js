import app from "./src/app.js";
import connectDb from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed", err);
  });
