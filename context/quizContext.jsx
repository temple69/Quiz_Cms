const { createContext, useState } = require("react");

export const QuizContext = createContext({
  QuizQuestions: [],
  QuizAnswers: [],
  singleQuiz: {},
  editMode: false,
  QuizQuestionsHandler: () => {},
  DeleteQuizByIdHandler: () => {},
  EditQuizByIdHandler: () => {},
  EditModeHandler: () => {},
});

const QuizContextProvider = ({ children }) => {
  const [QuizParameters, setQuizParameters] = useState({
    QuizQuestions: [],
    QuizAnswers: [],
    singleQuiz: {},
    editMode: false,
  });
  const { QuizAnswers, QuizQuestions, singleQuiz,editMode } = QuizParameters;
  console.log(QuizQuestions)
  //Function that adds quizzes created to the quiz array
  const QuizQuestionsHandler = (quizData) => {
    localStorage.setItem("Quizs", JSON.stringify(quizData));
    setQuizParameters((prevData) => {
      if (prevData.QuizQuestions.includes(quizData)) {
        return prevData.QuizQuestions;
      }
      return {
        ...prevData,
        QuizQuestions: [...prevData.QuizQuestions, quizData],
      };
    });
    setQuizParameters((prevData) => {
      const {quiz_answer}= quizData
      if (prevData.QuizAnswers.includes(quiz_answer)) {
        return prevData.QuizAnswers;
      }
      return {
        ...prevData,
        QuizAnswers: [...prevData.QuizAnswers, quiz_answer],
      };
    }); 
  };

  //Function that deletes selected quiz
  const DeleteQuizByIdHandler = (id) => {
    setQuizParameters((prevData) => {
      const filteredQuiz = QuizQuestions.filter((quiz) => quiz.id !== id);
    
      return {
        ...prevData,
        QuizQuestions: filteredQuiz,
      };
    });
  };
  //Function that finds the selected quiz to be edited
  const EditQuizByIdHandler = (id) => {
    const findSingleQuiz = QuizQuestions.find((quiz) => quiz.id === id);
    setQuizParameters((prevData) => {
      return {
        ...prevData,
        singleQuiz: findSingleQuiz,
      };
    });
  };
  const EditModeHandler = () => {
      setQuizParameters((prevData) => {
      return {
        ...prevData,
        editMode: true,
      };
    });
  };
  const quizContextDataAndMethods = {
    QuizAnswers,
    QuizQuestions,
    DeleteQuizByIdHandler,
    EditQuizByIdHandler,
    QuizQuestionsHandler,
    singleQuiz,
    EditModeHandler
  };
  return (
    <QuizContext.Provider value={quizContextDataAndMethods}>
      {" "}
      {children}{" "}
    </QuizContext.Provider>
  );
};
export default QuizContextProvider;
