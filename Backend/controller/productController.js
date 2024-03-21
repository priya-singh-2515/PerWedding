import productmodel from "../model/productmodel.js";
import fs from "fs";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      category,

      paragraph,
      venue,
      hairandmakeup,
      floriestCompany,
      catering,
      desert,
      hotel1,
      hotel2,
    } = req.fields;
    const { photo } = req.files;
    if (!name) {
      return res.send({
        success: false,
        message: "name is require",
      });
    }

    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }
    const product = new productmodel({ ...req.fields });
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(200).send({
      success: true,
      message: "product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};

export const getProductByCat = async (req, res) => {
  try {
    const products = await productmodel
      .find({ category: req.params.cat })
      .select("-photo");
    // .populate("Category");

    if (!products || products.length === 0) {
      // Check if products array is empty
      return res.status(404).send({
        success: false,
        message: "No products found for this category",
      });
    }

    res.status(200).send({
      success: true,
      message: "Here are the products",
      total: products.length,
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to retrieve products",
      error: error.message,
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.pid; // Assuming product ID is passed in the URL parameter
    const product = await productmodel
      .findOne({ _id: productId })
      .select("-photo");

    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Here is the product",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to retrieve product",
      error: error.message,
    });
  }
};
