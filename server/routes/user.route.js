import express from "express";
import { getUser, login, logout, register } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

// Signup route for user registration
router.route("/signup").post(register);

// Login route for user login
router.route("/login").post(login);

// Logout route for user logout
router.route("/logout").get(logout);

// Me route for getting user details
router.route("/me").get(isLoggedIn, getUser);

export default router;
