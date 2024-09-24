import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URI = process.env.MONGO_URI;

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(DB_URI);
		console.log("MongoDB connected successfuly!");
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};
