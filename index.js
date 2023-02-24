import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
mongoose.set("strictQuery", true);
import cors from "cors";
import router from "./Routes/studentRoutes.js";
const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://ferozkhalil:feroz5675@cluster0.rhev1gd.mongodb.net/sms"
  )
  .then(() => {
    app.listen(PORT, () => console.log(`listning to the port: ${PORT} `));
  })
  .catch((error) => {
    console.log(error);
  });
app.use("/student", router);
