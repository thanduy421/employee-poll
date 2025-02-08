import authedUser from "../reducers/authedUser";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestion", () => {
  test("will return saved question with all expected fields", async () => {
    const correctData = {
      optionOneText: "stay",
      optionTwoText: "leave",
      author: "johndoe",
    };

    const savedQuestion = await _saveQuestion(correctData);

    expect(savedQuestion).toHaveProperty("id");
    expect(savedQuestion).toHaveProperty("optionOne");
    expect(savedQuestion).toHaveProperty("optionTwo");
    expect(savedQuestion).toHaveProperty("timestamp");
    expect(savedQuestion).toHaveProperty("author");
    expect(savedQuestion.optionOne.text).toBe("stay");
    expect(savedQuestion.optionTwo.text).toBe("leave");
    expect(savedQuestion.author).toBe("johndoe");
  });

  test("should throw an error for incorrect data", async () => {
    const incorrectData = {
      optionOneText: "Option 1",
      // optionTwoText and author properties are missing
    };

    await expect(_saveQuestion(incorrectData)).rejects.toBe(
      "Properties of the provided question object were not enough."
    );
  });
});

describe("_saveQuestionAnswer", () => {
  test("will return true when correctly formatted data is passed", async () => {
    const correctData = {
      authedUser: "johndoe",
      qid: "loxhs1bqm25b708cmbf3g",
      answer: "optionOne",
    };

    const response = await _saveQuestionAnswer(correctData);

    expect(response).toBe(true);
  });

  test("should throw an error for incorrect data", async () => {
    const incorrectData = {
      answer: "optionTwo",
      qid: "loxhs1bqm25b708cmbf3g",
      //authedUser properties are missing
    };

    await expect(_saveQuestionAnswer(incorrectData)).rejects.toBe(
      "Properties of the provided answer object were not enough."
    );
  });
});
