import React, { useState, useEffect } from "react";

const [currentQuestion, setCurrentQuestion] = useState({});
const [questions, setQuestions] = useState([]);
const [questionOptions, setQuestionOptions] = useState([]);
const [chooseOptions, setChosenOptions] = useState([]);

const QuestionsOptions = () => {
  useEffect(() => {
    //call API questions
    const questionsRes = axios.get("/questions");

    /*

	questions = [
		{
			question: "Type of drink",
			key: "liquor",
			order: 1
		},
		{
			question: "Style of drink",
			key: "style",
			order: 2
		},
	]

	*/

    setQuestions(questionsRes);
    setCurrentQuestion(questionsRes[0]);

    // call API options
    const { data, options } = await axios.post("/options", {
      options: [],
      nextKey: questions[0].key, // "liquor"
    });

    setQuestionOptions(options);
  }, []);

  const onClickOption = (optionChosen) => {
    /*

	currentQuestion =
	{
		question: "Type of drink",
		key: "liquor",
		order: 1
	}

	*/
    const currentQuestionIndex = questions.findIndex(
      (q) => currentQuestion.question === q.question
    );
    const nextQuestion = questions[currentQuestionIndex + 1];

    setChosenOptions((prev) => [
      ...prev,
      { key: currentQuestion.key, value: optionChosen },
    ]);

    // call API options
    const { data, options } = await axios.post("/options", {
      options: chooseOptions, // [{key: "liquor", value: optionChoosen}] // 1
      nextKey: nextQuestion.key, // "style"
    });

    setQuestionOptions(options);

    setCurrentQuestion(nextQuestion);
  };

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      {questionOptions.map((opt) => (
        <Button onClick={() => onClickOption(opt)}>{opt}</Button>
      ))}
    </div>
  );
};

export default QuestionsOptions;
