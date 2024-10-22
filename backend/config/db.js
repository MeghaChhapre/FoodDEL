import mongoose from "mongoose";

export const connectDB = async () =>{
  await mongoose.connect('mongodb+srv://fooddel:fooddel471@cluster0.750gg.mongodb.net/fooddel').then(()=>console.log("DB Connected"))
}