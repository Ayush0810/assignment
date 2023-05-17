import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import Merchant from "../models/Merchant.details.js";
import User from "../models/user.js";

// Create a new merchant
export const createMerchant = asyncHandler(async (req, res, next) => {
  const { contactname, pincode, location, mobile, website, transaction } = req.body;

  // Check if all required fields are provided
  if (!contactname || !pincode || !location || !mobile || !website || !transaction) {
    return res.status(400).json({
      success: false,
      message: 'Please enter all fields',
    });
  }

  // Check if the merchant already exists
  const merchantExists = await Merchant.find({ user: req.user._id });

  if (merchantExists.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Merchant exists',
    });
  }

  // Create a new merchant
  const createMer = await Merchant.create({
    user: req.user._id,
    contactname,
    pincode,
    location,
    mobile,
    website,
    transaction,
  });

  await createMer.save();

  return res.status(200).json({
    success: true,
    message: `${createMer.name} your data has been stored`,
    createMer,
  });
});

// Get merchant details
export const getMerchantDetails = asyncHandler(async (req, res) => {
  // Find the merchant details for the user
  const user = await Merchant.find({ user: req.user._id }).populate("user");
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }
  return res.status(200).json({
    success: true,
    user,
  });
});
