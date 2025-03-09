import React, { useState } from "react";

const QuizletApp = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newType, setNewType] = useState("short");
  const [newOptions, setNewOptions] = useState([]);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState("");
  const [isCreating, setIsCreating] = useState(true);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: newQuestion,
        answer: newAnswer,
        type: newType,
        options: newOptions,
        correctAnswer: newCorrectAnswer,
      },
    ]);
    setNewQuestion("");
    setNewAnswer("");
    setNewType("short");
    setNewOptions([]);
    setNewCorrectAnswer("");
  };

  const addOption = () => {
    setNewOptions([...newOptions, newAnswer]);
    setNewAnswer("");
  };

  const toggleMode = () => {
    setIsCreating(!isCreating);
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      <h2>Quizlet App</h2>
      <button onClick={toggleMode}>
        {isCreating ? "Run Quiz" : "Create Quiz"}
      </button>
      {isCreating ? (
        <div>
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Add a new question"
          />
          <select
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
          >
            <option value="short">Short Answer</option>
            <option value="multiple">Multiple Choice</option>
            <option value="long">Long Answer</option>
          </select>
          {newType === "multiple" && (
            <div>
              <input
                type="text"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                placeholder="Add an option"
              />
              <button onClick={addOption}>Add Option</button>
              <ul>
                {newOptions.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
              <input
                type="text"
                value={newCorrectAnswer}
                onChange={(e) => setNewCorrectAnswer(e.target.value)}
                placeholder="Correct answer"
              />
            </div>
          )}
          {newType !== "multiple" && (
            <input
              type="text"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Add an answer"
            />
          )}
          <button onClick={addQuestion}>Add Question</button>
          <ul>
            {questions.map((qa, index) => (
              <li key={index}>
                <strong>Q:</strong> {qa.question} <br />
                <strong>A:</strong> {qa.answer}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            {shuffleArray(questions).map((qa, index) => (
              <li key={index}>
                <strong>Q:</strong> {qa.question} <br />
                {qa.type === "multiple" ? (
                  <ul>
                    {shuffleArray(qa.options).map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <strong>A:</strong> {qa.answer}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizletApp;
