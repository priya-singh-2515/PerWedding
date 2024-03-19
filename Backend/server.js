import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Routes/catRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/cat", router);

app.listen(8081, () => {
  console.log("server is running on port 8081");
});
mongoose
  .connect(
    "mongodb+srv://Tarunchauhan:Tarun123@cluster0.aub5cv6.mongodb.net/Prewedding"
  )
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log("failed to connect database " + err);
  });
