import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Load environment variables from the specified file
config({
  path: "./config/.env",
});

// Create an instance of the Express application
const app = express();

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for enabling Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"], // Allow specified HTTP methods
    credentials: true, // Enable sending cookies in CORS requests
  })
);

// Middleware for parsing JSON data in request bodies
app.use(express.json());

// Middleware for parsing URL-encoded data in request bodies
app.use(express.urlencoded({ extended: true }));

// Import and use the merchantRoute and userRoute as routes for "/api/v1" path
import merchantRoute from "./routes/merchant.route.js";
import userRoute from "./routes/user.route.js";
app.use("/api/v1", merchantRoute);
app.use("/api/v1", userRoute);

// Export the Express application as the default export
export default app;
