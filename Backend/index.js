import cors from "cors";
import express from "express";
import { dbConnect } from "./config/config.js";
import pjRouter from "./routes/personajes.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
dbConnect();
app.use("/personajes", pjRouter);
