import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import apiRouter from "./routes";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

app.use(express.static("public"));

app.use("/api", apiRouter);

app.use((req, res, next) => {
  try {
    res.sendFile(join(__dirnam, "../../public/index.html"));
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(config.port || 5000, () => {
  console.log(`Server listening on port ${config.port}...`);
});
