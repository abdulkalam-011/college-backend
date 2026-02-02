import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import { BASE_URI } from "./constants.js";
const app = express();


if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
}
if (process.env.NODE_ENV === "development") {
  console.log("Running in development mode");
  app.use(morgan("dev"));
}

// cors configuration middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

// middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("Hello, World!");
});


// routes imports 
import userRoutes from "./routes/user.routes.js";

// routes
app.use(`${BASE_URI}/users`, userRoutes);


export { app };
