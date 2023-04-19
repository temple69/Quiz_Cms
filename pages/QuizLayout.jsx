
import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import useQuizContext from "@/hooks/useContext";





const QuizLayout = () => {
  const [single, setSingleQuiz] = useState({});
  const context= useQuizContext()
  const{DeleteQuizByIdHandler,EditQuizByIdHandler,EditModeHandler}= context

  useEffect(() => {
    if (localStorage.getItem("Quizs") === null) {
      return;
    } else {
      const getQuiz = JSON.parse(localStorage.getItem("Quizs"));
      setSingleQuiz(getQuiz);
    }
  }, []);

  return (
    <section className="flex justify-center">
      <div className="bg-[silver;] h-[100vh] w-[50%]">
        <article className=" bg-red-500 flex justify-between items-center py-4 px-4">
          <button className="font-extrabold text-lg text-white">
            00:{single.quiz_duration}
          </button>
          <p className="flex items-center gap-2 text-white font-bold cursor-pointer" onClick={()=>DeleteQuizByIdHandler(single.id)}>
            Delete Quiz
            <RiDeleteBin5Line size={30} color="white"  />
          </p>
          <p className="flex items-center gap-2 text-white font-bold cursor-pointer" onClick={()=>EditQuizByIdHandler(single.id)}>
            Edit Quiz
            <FiEdit size={30} color="white"  />
          </p>
        </article>

        <article>
          <p className="text-center my-5 rounded-[50px] bg-green-500 mx-6">
            {single.quiz_question}
          </p>
        </article>
        <article className="flex justify-center">
          <button className="w-[80%] text-center bg-red-500 font-extrabold text-lg text-white h-[30px] rounded-3xl flex items-center justify-center gap-4">
            Next Question
    
          </button>
        </article>
      </div>
    </section>
  );
};

export default QuizLayout;
