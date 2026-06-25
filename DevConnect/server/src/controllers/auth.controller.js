import UserModel from "../models/user.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

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

  login: function () {},
};

export default authController;
