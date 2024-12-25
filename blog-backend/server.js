import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import conn from "./config/db.js";
import { errorHandler } from "./error/errorHandler.js";
import router from "./routes/userroutes.js";
import blogrouter from "./routes/blogRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cookieParser());

conn.connect((err, res) => {
  console.log("Database Connected");
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(errorHandler);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api", router);
app.use("/api/blog", blogrouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
