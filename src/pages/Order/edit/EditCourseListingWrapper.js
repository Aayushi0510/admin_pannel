import React, { useEffect, useState } from 'react'
import Sidenavlayout from '../../../components/layout/sidenavLayout/Sidenavlayout'
import {  useGetUserByIdQuery, useUpdateUsersMutation } from '../../../services/authService';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsTableLoading, setSingleUserData } from '../../../redux/slices/AuthSlice';
import EditUserListing from './EditCourseListing';
import { useUpdateCourseMutation } from '../../../services/courseServices';
import { setSelectedCourseData } from '../../../redux/slices/CourseSlice';

const EditCourseListingWrapper = () => {
    const [apiStatus, setApiStatus] = useState(false);

    const params = useParams();
    const dispatch = useDispatch();
    const Id = params.id;
    console.log(Id)
    const navigate = useNavigate();
    const [updateUser] = useUpdateCourseMutation();
    const { data, isLoading, isFetching } = useGetUserByIdQuery(Id);
    const { selectedCourseData } = useSelector((state) => state?.course);
  
  console.log(data)
    useEffect(() => {
      if (!isLoading && !isFetching) {
        dispatch(setSelectedCourseData(data?.data));
      } else {
        dispatch(setIsTableLoading(true));
      }
    }, [dispatch, data, isLoading, isFetching]);
  
  
  
  const handleEditUser = async (formData ,e) => {
    console.log(formData ,"formData")
    try {
      const response = await updateUser({
        body:{
        title: formData.title,
        description: formData.description,
        totalUsers: formData.totalUsers,
        rating: formData.rating,
        price: formData.price,
        categoryId: formData.categoryId,

        },
        id: Id,
  
      });
      console.log(response)
      if (response) {
        toast.success("User edited successfully");
        navigate("/users");
      } else {
        // Show error toast
        toast.error("Error Updating users");
      }
    } catch (error) {
      console.error("Error updating users:", error);
      // Show error toast
      toast.error("Error updating users");
      setApiStatus(false);
    }
  };
  return (
    <Sidenavlayout>
        {/* <EditUserListing onSubmit={handleEditUser}/> */}
    </Sidenavlayout>
  )
}

export default EditCourseListingWrapper