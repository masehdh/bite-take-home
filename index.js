import express from "express";
import mongoose from "mongoose";
import triggerSync from "./api/triggerSync.js";
import dotenv from "dotenv";
import { auth } from "./utilities/auth.js";

dotenv.config();

const app = express();
const port = 3001;

app.use(auth.validateBearerToken);
app.post("/trigger-sync", triggerSync);

try {
  await mongoose.connect(process.env.MONGO_DB_URI);
  console.log("Connected to db");
} catch (e) {
  console.log(`Failed to connect to db: ${e}`);
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
