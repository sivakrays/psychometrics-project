import Answer from "../model/answer";

const saveAnswer = async (req, res) => {
  const answer = req.body;

  if (!Array.isArray(answer) || answer.length === 0) {
    return res.status(400).json({
      message: "Data is not an array",
    });
  }
  const savedAnswer = await Answer.bulkCreate(answer);
};
