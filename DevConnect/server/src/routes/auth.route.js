import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRoute = Router();

/**
 * @description resgister route
 * @access public
 * @method post 
 */
authRoute.post("/register", authController.register);

/**
 * @description login route
 * @access public
 * @method post 
 */
authRoute.post("/login", authController.login);

/**
 * @description logout route
 * @access public + protected
 * @method post 
 */
authRoute.post("/logout", authMiddleware, authController.logout);

/**
 * @description get user route
 * @access public + protected
 * @method get 
 */
authRoute.get("/get-me", authMiddleware, authController.getMe);

export default authRoute;
