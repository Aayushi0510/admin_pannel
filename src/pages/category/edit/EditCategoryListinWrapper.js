import React, { useEffect, useState } from 'react'
import Sidenavlayout from '../../../components/layout/sidenavLayout/Sidenavlayout'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsTableLoading, setSelectedCategory } from '../../../redux/slices/CategorySlice';
import { useGetCourseByIdQuery } from '../../../redux/slices/services/courseServices';
import { useGetCategoryByIdQuery, useUpdateCategoryMutation } from '../../../redux/slices/services/categoryService';
import EditCategoryListing from './EditCategoryLIsting';

const EditCategoryWrapper = () => {
    const [apiStatus, setApiStatus] = useState(false);

    const params = useParams();
    const dispatch = useDispatch();
    const Id = params.id;
    console.log(Id)
    const navigate = useNavigate();
    const [updateCategory] = useUpdateCategoryMutation();
    const { data, isLoading, isFetching } = useGetCategoryByIdQuery(Id);
  
  console.log(data)
    useEffect(() => {
      if (!isLoading && !isFetching) {
        dispatch(setSelectedCategory(data));
      } else {
        dispatch(setIsTableLoading(true));
      }
    }, [dispatch, data, isLoading, isFetching]);
  
  
  
  const handleEditUser = async (formData ,e) => {
    console.log(formData ,"formData")
    try {
      const response = await updateCategory({
        body:{
        title:formData.title
        },
        id: Id,
  
      });
      console.log(response)
      if (response) {
        toast.success("Category Updated successfully");
        navigate("/category");
      } else {
        toast.error("Error Updating Category");
      }
    } catch (error) {
      console.error("Error updating Category:", error);
      toast.error("Error updating Category");
      setApiStatus(false);
    }
  };
  return (
    <Sidenavlayout>
        <EditCategoryListing onSubmit={handleEditUser}/>
    </Sidenavlayout>
  )
}

export default EditCategoryWrapper