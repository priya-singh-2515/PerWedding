import CatModel from "../model/CatModel.js";

export const newCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required",
      });
    }
    const existingCat = await CatModel.findOne({ name });
    if (existingCat) {
      return res.status(409).send({
        success: false,
        message: "Category already exists",
      });
    }
    const data = await new CatModel({ name }).save();
    res.status(201).send({
      success: true,
      message: "Category successfully added",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to create category",
      error: error.message,
    });
  }
};

//get all category

export const getAllCAtegory = async (req, res) => {
  try {
    const data = await CatModel.find();
    res.status(201).send({
      success: true,
      message: "here is your all category",
      total: data.length,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to create category",
      error: error.message,
    });
  }
};
