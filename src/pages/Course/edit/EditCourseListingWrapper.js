import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  useAddCourseMutation,
  useGetCourseByIdQuery,
  useUpdateCourseMutation,
} from "../../../redux/slices/services/courseServices";
import Sidenavlayout from "../../../components/layout/sidenavLayout/Sidenavlayout";
import {
  setCategoryData,
  setIsTableLoading,
} from "../../../redux/slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoryQuery } from "../../../redux/slices/services/categoryService";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import EditCourseListing from "./EditCourseListing";

const EditCourse = () => {
  const dispatch = useDispatch();
  const [apiStatus, setApiStatus] = useState(false);
  const params = useParams();
  const Id = params.id;

  console.log(Id);
  const navigate = useNavigate();
  const [updateCourse] = useUpdateCourseMutation();
  const { data, isLoading, isFetching } = useGetCourseByIdQuery(Id);
  const [modules, setModules] = useState([
    { name: "", parts: [{ partNumber: 1, video: "" }] },
  ]);

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

      // Append modules data to FormData
      modules.forEach((module, moduleIndex) => {
        formData.append(`modules[${moduleIndex}][name]`, module.name);

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
      const response = await axios.put(
        `http://localhost:8000/api/course/${Id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response && response.data) {
        console.log(response.data.courses);

        //const courseId = response.data.courses._id;
        toast.success("Course Updated successfully");
        // navigate(`/quiz/${courseId}`);
       navigate("/course")
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
      <EditCourseListing
        onSubmit={handleAddCourse}
        onModulesChange={handleModulesChange}
      />
    </Sidenavlayout>
  );
};

export default EditCourse;
