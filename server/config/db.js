import mongoose from "mongoose";

mongoose. set('strictQuery', false); 
export const connectDB  =  ()=>
{
  const connection =  mongoose.connect(process.env.MONGO_URI);
  console.log("mongoDB connected with port ",process.env.PORT)
}