import sequelize from "../config/db.js";
import Option from "../model/Option.js";

export const getAllOptions = async (req, res) => {
  try {
    const allOptions = await Option.findAll();
    res.status(200).json({
      message: "data found",
      data: allOptions,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const saveOptionList = async (req, res) => {
  try {
    const optionList = req.body;

    if (!Array.isArray(optionList) || optionList.length === 0) {
      return res.status(400).json({ message: "request must be an array" });
    }
    const savedOptionList = await Option.bulkCreate(optionList);

    res.status(200).json({
      message: "options saved successfully",
      data: savedOptionList,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
