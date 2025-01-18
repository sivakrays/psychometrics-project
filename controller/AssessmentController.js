import sequelize from "../config/db.js";
import Assessment from "../model/Assessment.js";
import Option from "../model/Option.js";
export const getAllAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findAll();
    const optionList = await Option.findAll();
    if (assessment !== 0) {
      assessment.forEach((n) => {});
      const responseData = assessment.map((d, i) => ({
        questionId: d.id,
        question: d.question,
        option: optionList,
      }));
      res.status(200).json({ status: true, data: responseData });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching Questions", error: error.message });
  }
};

export const saveAssessments = async (req, res) => {
  try {
    const assessments = req.body;
    console.log(typeof req.body);

    if (!Array.isArray(assessments) || assessments.length === 0) {
      return res.status(400).json({ message: "request must be an array" });
    }

    console.log(!Array.isArray(assessments) || assessments.length === 0);

    const savedAssessments = await Assessment.bulkCreate(assessments);
    res.status(200).json({
      message: "assessments saved successfully",
      data: savedAssessments,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
