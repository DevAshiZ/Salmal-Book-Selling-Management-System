import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

//created mongodb connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json()); //allows json inputs as our inputs

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//middleware to handle errors if encountered
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; //500- internal server error
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
