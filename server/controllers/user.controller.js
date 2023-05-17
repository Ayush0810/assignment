import User from "../models/user.js";
import asyncHandler from "../utils/asyncHandler.js";
import { sendToken } from "../utils/sendToken.js";

// Register a new user
export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !password)
    return res.status(400).json({
      success: false,
      message: "Please enter all fields",
    });

  // Check if the user already exists
  let user = await User.findOne({ email });

  if (user)
    return res.status(409).json({
      success: false,
      message: `User already exists with email ${user.email}`,
    });

  // Create a new user
  user = await User.create({
    name,
    email,
    password,
  });

  // Send token for successful registration
  sendToken(res, user, "Registered Successfully", 201);
});

// User login
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password)
    return res.status(400).json({
      success: false,
      message: "Please enter all fields",
    });

  // Find the user by email
  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({
      success: false,
      message: "Incorrect email or password",
    });

  // Compare the provided password with the user's password
  const isMatch = await user.comparePassword(password);

  if (!isMatch)
    return res.status(401).json({
      success: false,
      message: "Please enter a valid email or password",
    });

  // Send token for successful login
  sendToken(res, user, `Welcome back, ${user.name}`, 200);
});

// User logout
export const logout = asyncHandler(async (req, res) => {
  // Clear the token cookie and log out the user
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});

// Get user details
export const getUser = asyncHandler(async (req, res, next) => {
  // Find the user by their ID
  const user = await User.findById(req.user._id);

  if (!user)
    return res.status(400).json({
      success: false,
      message: "Please try again",
    });

  // Return the user details
  return res.status(200).json({
    success: true,
    user,
  });
});
