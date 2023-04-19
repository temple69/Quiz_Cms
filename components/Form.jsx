import useQuizContext from "@/hooks/useContext";
import { previewData } from "next/dist/client/components/headers";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  quiz_question,
  quiz_answer,
  quiz_duration,
  quiz_description,
  option
  
}) => {
  const context = useQuizContext();
  const { QuizQuestionsHandler } = context;
  const [quizes, setQuizes] = useState({
    quiz_answer,
    quiz_description,
    quiz_duration,
    quiz_question,
    option,
    checked:false,

  });

  const [optionList,setOptionInputList]=useState([])

  
  const inputHandler = (event) => {
    const { name, value,checked } = event.target;

    setQuizes((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
    if (name === 'checked') {
        setQuizes((prevdata) => {
            return {
              ...prevdata,
              checked: checked,
            };
          });
        
    }
    
  };
  const CreateQuizHandler = (event) => {
    event.preventDefault();
    const addIdToQuiz = Object.assign(quizes, {
      id: uuidv4(),
    });
    console.log(addIdToQuiz);
    
    QuizQuestionsHandler(addIdToQuiz);
  };
  console.log(quizes.option);
  const addToOptionsListHandler = (event) => {
     event.preventDefault();
    const newData= Object.assign(quizes.option,{
        id:uuidv4()
     })
     console.log(newData);
     setOptionInputList(optionList=>[...optionList,newData])
     setOptionInput
};
  console.log(quizes.checked);
  console.log(optionList);

  return (
    <form
      className="bg-yellow-500 w-[100%] px-2 py-4"
      onSubmit={CreateQuizHandler}
    >
      <label className="block mb-3">
        Please input Quiz Question
        <input
          type="text"
          name="quiz_question"
          className="block w-full h-10 rounded-md px-2"
          onChange={inputHandler}
          value={quiz_question}
        />
      </label>
      <label className="block mb-3 font-bold">
        Please input Quiz Description
        <input
          type="text"
          name="quiz_description"
          className="block w-full h-10 rounded-md px-2"
          onChange={inputHandler}
          value={quiz_description}
        />
      </label>
      <label className="block mb-3 font-bold">
        Please input Quiz Duration(in seconds)
        <input
          type="number"
          name="quiz_duration"
          className="block w-full h-10 rounded-md px-2"
          onChange={inputHandler}
          value={quiz_duration}
        />
      </label>
      <label className="block mb-3 font-bold">
        Please input Your Answer
        <input
          type="text"
          name="quiz_answer"
          className="block w-full h-10 rounded-md px-2"
          onChange={inputHandler}
          value={quiz_answer}
        />
      </label>

      <fieldset className="flex justify-between items-center">
        <legend>Please Input Options fro Quiz Question</legend>
        <label className="flex items-center gap-2">
          <input
            type="text"
            className="block my-4 w-full px-3 h-[50px] rounded-md"
            name="option"
            value={option}
            onChange={inputHandler}
          />
          <button
            className="w-full h-[50px] bg-green-800 rounded-md text-white font-bold my-4"
            onClick={addToOptionsListHandler}
          >
            Create Quiz Optons
          </button>
        </label>
        <label>
          <input type="checkbox" name="checked" id=""  onChange={inputHandler}/>
          Show Options
        </label>
        {/* <input
          type="text"
          placeholder="Option A"
          className="block my-4 w-full px-3 h-10 rounded-md"
        />
        <input
          type="text"
          placeholder="Option B"
          className="block my-4 w-full px-3 h-10 rounded-md"
        />
        <input
          type="text"
          placeholder="Option C"
          className="block my-2 w-full px-3 h-10 rounded-md"
        /> */}
      </fieldset>
      <button className="w-full h-[50px] bg-green-800 rounded-md text-white font-bold my-4">
        Create Quiz
      </button>
    </form>
  );
};

export default Form;
