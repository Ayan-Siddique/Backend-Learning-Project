import cookieParser from "cookie-parser";
import express from "express";
import authRoute from "./routes/auth.route.js";
import morgan from "morgan";
import cors from "cors";

const corsOptions = {
  // Allow only requests from this domain
  origin: "http://localhost:5173/",
  Credential: true,
};

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors(corsOptions));

app.use("/api/auth", authRoute);

export default app;
