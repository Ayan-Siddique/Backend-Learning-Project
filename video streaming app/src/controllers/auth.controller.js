import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const authController = {
  /**
   * @desc    Register a new user
   * @route   POST /api/auth/register
   * @access  Public
   */

  registerUser: asyncHandler(async (req, res) => {
    const { userName, fullName, email, password } = req.body;

    if (
      [userName, fullName, email, password].some(
        (field) => field?.trim() === "",
      )
    )
      throw new ApiError(400, "All fields are required");

    const isUserExist = await User.findOne({
      $or: [{ userName }, { email }],
    });

    if (isUserExist) throw new ApiError(409, "User already exist");

    const user = await User.create({
      userName,
      fullName,
      email,
      password,
    });

    if (!user) {
      throw new ApiError(500, "Something went wrong while registering user");
    }

    res
      .status(201)
      .json(new ApiResponse(200, "User Registered successfully", user));
  }),

  loginUser: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
  throw new ApiError(400, "Email and password are required");
}

    const user = await User.findOne({ email });
    if (!user) throw new ApiError(404, "User Not Found");

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) throw new ApiError(404, "Password is incorrect");

    const refreshToken = await user.generateRefreshToken();
    const accessToken = await user.generateAccessToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken",
    );

    const options = {
      httpOnly: true,
      secure: true
    };

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(new ApiResponse(200, "User Logged in successfully", loggedInUser));
  }),
};
