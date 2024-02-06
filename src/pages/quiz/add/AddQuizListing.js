import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  useAddQuizMutation,
  useGetModuleByCourseIdQuery,
} from "../../../redux/slices/services/quizServices";
import {
  setIsTableLoading,
  setQuizData,
} from "../../../redux/slices/QuizSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { IoPersonCircleOutline } from "react-icons/io5";
import BreadCrumbs from "../../../components/BreadCrumb/BreadCrumb";

const breadcrumbs = [
  {
    label: "Dashboard",
    path: "/",
    icon: <IoPersonCircleOutline />,
  },
  {
    label: "All Course",
    path: "/course",
    icon: <IoPersonCircleOutline />,
  },
];

const AddQuizListing = ({ onAddQuestion }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const courseId = params.id;
  const [questionText, setQuestion] = useState("");
  const [correctOption, setCorrectOption] = useState(""); // Added correctOption to the state

  const [options, setOptions] = useState(["", "", "", ""]);
  const [apiStatus, setApiStatus] = useState(false);
  const { data, isFetching, isLoading } = useGetModuleByCourseIdQuery(courseId);


  useEffect(() => {
    if (!isLoading && !isFetching) {
      dispatch(setQuizData(data));
    } else {
      dispatch(setIsTableLoading(true));
    }
  }, [dispatch, data, isFetching, isLoading]);

  const [addQuiz] = useAddQuizMutation();

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };
  const handleCorrectOptionChange = (e) => {
    setCorrectOption(e.target.value);
  };

  const handleAddQuestion = async (e) => {
    e.preventDefault();

    try {
      setApiStatus(true);

      // Validate data or perform additional logic if needed

      const formData = {
        moduleId: e.target.moduleId.value,
        questionText: e.target.questionText.value,
        options: options,
        correctOption: correctOption,
      };

      const response = await addQuiz(formData);

      if (response.data) {
        toast.success("Quiz added successfully");
        setQuestion("");
        setOptions(["", "", "", ""]);
        setCorrectOption("");
      } else {
        toast.error("Error adding Quiz");
      }
    } catch (error) {
      console.error("Error adding Quiz:", error);
      toast.error("Error adding Quiz");
    } finally {
      setApiStatus(false);
    }
  };
  return (
    <div>
      <div className="p-4 flex flex-col gap-2  ">
        {/* Page Heading */}
        <BreadCrumbs breadcrumbs={breadcrumbs} />

        <div className="pt-1">
          <span className="text-xl font-semibold text-slate-600">Add Quiz</span>
        </div>
        <form onSubmit={handleAddQuestion}>
          <div className="grow max-h-full bg-white border bg-1 rounded shadow  bg-form-bg bg-cover bg-no-repeat">
            <div className="flex justify-between px-3 h-[60px] items-center border-b border-slate-300">
              {/* Form Heading */}
              <div className="text-xl font-medium"> Course Details</div>

              {/* BUTTON - Add Button */}
              <div>
                <button
                  type="submit"
                  disabled={apiStatus}
                  className={`bg-blue-700 rounded py-1 px-5 text-white border border-primary-main ${
                    apiStatus ? "opacity-50" : ""
                  }`}
                >
                  Add Quiz
                </button>
              </div>
            </div>
            <div className="grow py-8 px-3">
              <div className="flex flex-col">
                <label htmlFor="speedNetworking" className="ml-1 ">
                  Module
                </label>

                <select
                  name="moduleId"
                  className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                  required
                >
                  {data?.map((category) => (
                    <option
                      key={category._id} // Assuming your category object has an _id property
                      className="text-black"
                      value={category._id} // Send category ID as the value
                    >
                      {category.name}{" "}
                      {/* Assuming your category object has a name property */}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label>Question:</label>
                <input
                  type="text"
                  name="questionText"
                  value={questionText}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 col-span-12"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>
                  Options:
                  <div className="flex flex-col gap-2">
                    {options.map((option, index) => (
                      <input
                        key={index}
                        type="text"
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(index, e.target.value)
                        }
                        className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 col-span-6"
                        required

                      />
                    ))}
                  </div>
                </label>
              </div>
              <div className="flex flex-col">
                <label>Correct option</label>
                <input
                  type="text"
                  name="correctOption"
                  value={correctOption}
                  onChange={handleCorrectOptionChange}
                  className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 col-span-12"
                  required

                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuizListing;
