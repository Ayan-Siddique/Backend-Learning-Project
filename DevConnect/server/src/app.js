import cookieParser from "cookie-parser";
import express from "express";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute);


export default app;
