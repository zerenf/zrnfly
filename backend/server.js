import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
	cors({
		origin: "*",
	})
);

const PORT = process.env.PORT;

app.get("/flys", (req, res) => {
	res.send("Server is ready!");
});

app.listen(PORT, () => {
	connectDB();
	console.log(`App listening at port: ${PORT}`);
});
