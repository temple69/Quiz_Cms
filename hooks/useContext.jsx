import { QuizContext } from "@/context/quizContext";
import React, { useContext } from "react";


const useQuizContext = () => {
  const context = useContext(QuizContext);
  return context;
};

export default useQuizContext;
