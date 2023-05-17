import mongoose from "mongoose";

// Define the merchant schema
const merchantSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  contactname: {
    type: String,
    required: [true, "Please enter your contact name or fill your given name"],
  },
  pincode: {
    type: Number,
    required: [true, "Please enter pincode"],
  },
  location: {
    type: String,
    required: [true, "Enter your address"],
  },
  mobile: {
    type: Number,
    required: [true, "Please enter your contact number"],
    unique: true,
  },
  website: [
    {
      type: String,
      unique: true,
    },
  ],
  transaction: {
    type: Number,
    required: [true, "Please enter your average daily transaction"],
  },
});

// Create the Merchant model
const Merchant = mongoose.model("Merchant", merchantSchema);

export default Merchant;
