import UserModel from "../models/user.model.js";
import sessionModel from "../models/session.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import bcrypt from "bcryptjs";

async function generateTokens(user) {
  const refreshToken = await user.generateRefreshToken();
  const accessToken = await user.generateAccessToken();

  return { refreshToken, accessToken };
}

const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

const authController = {
  /**
   * @description User Register function
   * @method POST
   * @route /auth/register
   */

  register: asyncHandler(async (req, res) => {
    const { userName, fullName, email, password } = req.body;

    if (!userName || !fullName || !email || !password) {
      throw new ApiError(404, "All field are required");
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ userName }, { email }],
    });

    if (isUserExist) throw new ApiError(400, "User Already Exist");

    const user = await UserModel.create({
      userName,
      fullName,
      email,
      password,
    });

    res.status(201).json(
      new ApiResponse(201, "user resgister successfully", {
        userName: user.userName,
        fullName: user.fullName,
        email: user.email,
      }),
    );
  }),

  /**
   * @description User login function
   * @method POST
   * @route /auth/login
   */

  login: asyncHandler(async (req, res) => {
    const { email, userName, password } = req.body;

    if (!(email || userName) || !password)
      throw new ApiError(409, "All fields are required");

    const user = await UserModel.findOne({
      $or: [{ email }, { userName }],
    });
    if (!user) throw new ApiError(404, "User Not exist");

    const isPasswordCorrect = await user.isValidPassword(password);

    if (!isPasswordCorrect)
      throw new ApiError(409, "Incoorect Username/email or Password");

    const { refreshToken, accessToken } = await generateTokens(user);

    console.log(`refresh-token = ${refreshToken}`);

    const refreshTokenHash = await bcrypt.hash(refreshToken, 10);
    sessionModel.create({
      user: user._id,
      refreshToken: refreshTokenHash,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    res.cookie("refreshToken", refreshToken, cookieOptions).json(
      new ApiResponse(200, "User Logged in successfully", {
        id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        email: user.email,
        accessToken,
      }),
    );
  }),

  /**
   * @description User logOut function
   * @method POST
   * @route /auth/logout
   */

  logout: asyncHandler(async (req, res) => {
    const { _id } = req.user;

    const sessions = await sessionModel.find({
      $or: [{ _id }, { revoked: false }],
    });

    if (!sessions) throw new ApiError(404, "No session Found");

    res
      .clearCookie("refreshToken")
      .json(
        new ApiResponse(200, "User logged out successfully || Session Expired"),
      );
  }),

  /**
   * @description User get user function
   * @method GET
   * @route /auth/get-me
   */

  getMe: asyncHandler(async (req, res) => {
    const { _id, userName, fullName, email } = req.user;

    const sessions = await sessionModel.find({
      $or: [{ _id }, { revoked: false }],
    });

    res.status(200).json(
      new ApiResponse(200, "User fetched Succesfully", {
        userName,
        fullName,
        email,
        sessions,
      }),
    );
  }),
};

export default authController;
