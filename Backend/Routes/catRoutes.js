import express from "express";
import {
  getAllCAtegory,
  newCategoryController,
} from "../controller/categoryController.js";

const router = express.Router();
router.post("/add-category", newCategoryController);

// all category

router.get("/allcategory", getAllCAtegory);

export default router;
