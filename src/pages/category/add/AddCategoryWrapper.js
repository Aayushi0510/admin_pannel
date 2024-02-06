import React, { useState } from "react";
import { toast } from "react-hot-toast";
import AddCategoryList from "./AddCategory";
import { useAddCategoryMutation } from "../../../redux/slices/services/categoryService";
import Sidenavlayout from "../../../components/layout/sidenavLayout/Sidenavlayout";
import {  useNavigate } from "react-router-dom";

const AddCategoryWrapper = () => {
  const navigate=useNavigate()
  const [apiStatus, setApiStatus] = useState(false);
  const [addCategory] = useAddCategoryMutation(); // Use the mutation hook

  const handleAddCourse = async (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    const { title } = event.target.elements;
    
    try {
      setApiStatus(true);
      const response = addCategory({
        title: title.value,
      });

      if (response) {
        toast.success("Category added Successfully");
        navigate("/category")
      } else {
        toast.error("Error adding Category");
      }
    } catch (error) {
      console.error("Error adding Category:", error);
      toast.error("Error adding Category");
      setApiStatus(false);
    }
  };

  return (
    <Sidenavlayout>
      <AddCategoryList onSubmit={handleAddCourse} />
    </Sidenavlayout>
  );
};

export default AddCategoryWrapper;
