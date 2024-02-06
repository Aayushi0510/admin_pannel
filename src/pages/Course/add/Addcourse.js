import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import AddCourseListing from "./AddCourseListing";
import { useAddCourseMutation } from "../../../redux/slices/services/courseServices";
import Sidenavlayout from "../../../components/layout/sidenavLayout/Sidenavlayout";
import {
  setCategoryData,
  setIsTableLoading,
} from "../../../redux/slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoryQuery } from "../../../redux/slices/services/categoryService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [apiStatus, setApiStatus] = useState(false);
  const [addCourse] = useAddCourseMutation();
  const [modules, setModules] = useState([
    { name: "", parts: [{ partNumber: 1, video: "" }] },
  ]);

  const { data, isFetching, isLoading } = useGetCategoryQuery();

  useEffect(() => {
    if (!isLoading && !isFetching) {
      dispatch(setCategoryData(data));
    } else {
      dispatch(setIsTableLoading(true));
    }
  }, [dispatch, data, isFetching, isLoading]);

  const handleAddCourse = async (event) => {
    event.preventDefault();
    const {
      description,
      title,
      rating,
      price,
      categoryId,
      subTitle,
      overview,
    } = event.target.elements;
    try {
      setApiStatus(true);

      // Create FormData object
      const formData = new FormData();
      formData.append("categoryId", categoryId.value);
      formData.append("title", title.value);
      formData.append("subTitle", subTitle.value);

      formData.append("description", description.value);
      formData.append("rating", rating.value);
      formData.append("price", price.value);
      formData.append("overview", overview.value);

      // Append modules data to FormDatao
      modules.forEach((module, moduleIndex) => {
        formData.append(`modules[${moduleIndex}][name]`, module.name);
        formData.append(`modules[${moduleIndex}][summary]`, module.summary);

        module.parts.forEach((part, partIndex) => {
          formData.append(
            `modules[${moduleIndex}][parts][${partIndex}][partNumber]`,
            part.partNumber
          );
          formData.append(
            `modules[${moduleIndex}][parts][${partIndex}][video]`,
            part.video
          );
        });
      });

      // Make POST request with FormData
      const response = await axios.post(
        "http://localhost:8000/api/course",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response && response.data) {
        const courseId = response.data.courses._id;
        toast.success("Course added successfully");
        navigate(`/quiz/${courseId}`);
      } else {
        toast.error("Error adding course");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("Error adding course");
      setApiStatus(false);
    }
  };

  const handleModulesChange = (updatedModules) => {
    setModules(updatedModules);
  };

  return (
    <Sidenavlayout>
      <AddCourseListing
        onSubmit={handleAddCourse}
        onModulesChange={handleModulesChange}
      />
    </Sidenavlayout>
  );
};

export default AddCourse;
