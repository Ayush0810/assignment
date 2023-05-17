import express from "express";
import { createMerchant, getMerchantDetails } from "../controllers/merchant.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

// Register route for creating a new merchant
router.route("/register").post(isLoggedIn, createMerchant);

// Merchant route for getting merchant details
router.route("/merchant").get(isLoggedIn, getMerchantDetails);

export default router;
