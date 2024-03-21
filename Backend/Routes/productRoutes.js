import express from "express";
import {
  addProduct,
  getProductByCat,
  getSingleProduct,
} from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router();

router.use("/create-product", formidable(), addProduct);
//getAll product by category
router.use("/get-product/:cat", getProductByCat);

// getSingleProduct
router.use("/single-product/:pid", getSingleProduct);

export default router;
