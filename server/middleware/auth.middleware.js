import User from "../models/user.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";

// Middleware to check if the user is logged in
export const isLoggedIn = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  // Check if the token exists
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Not logged in",
    });
  }

  // Verify and decode the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Find the user based on the decoded token
  req.user = await User.findById(decoded._id);

  next();
});
