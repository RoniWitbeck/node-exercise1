import express from "express";
import productRouter from "./products.route";

const router = express.Router();

router.use("/products", productRouter);

router.get("/test", (req, res, next) => {
  res.send("working");
});

export default router;
