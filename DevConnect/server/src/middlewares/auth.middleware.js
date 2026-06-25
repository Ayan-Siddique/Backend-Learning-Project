import UserModel from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import config from "../configs/env.js";

const authMiddleware = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;

    if(!refreshToken)
      throw new ApiError(400, "Token not found")

    const decoded = await jwt.verify(refreshToken, config.JWT_SECRET);

    const user = await UserModel.findById(decoded.id);

    if(!user)
      throw new ApiError(404, "Invalid Token")

    req.user = user;
    next();
  } catch (error) {
    console.log("error in auth middleware = ", error);
  }
};

export { authMiddleware };
